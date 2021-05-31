import joplin from 'api';
import { MenuItemLocation } from 'api/types';
import { ToolbarButtonLocation } from 'api/types';
import { ContentScriptType } from 'api/types';
import { settings } from "./settings";
import { actions, DTI_SETTINGS_PREFIX, ACTIVATE_ONLY_SETTING, ENABLE_JOIN_LINES, ENABLE_TOGGLE_OVERWRITE } from "./common";

function wrapSelectionWithStrings(selected: string|null, string1: string, string2 = '', defaultText = '') {
	if (!selected) selected = defaultText;

	// Remove white space on either side of selection
	const start = selected.search(/[^\s]/);
	const end = selected.search(/[^\s](?=[\s]*$)/);
	const core = selected.substr(start, end - start + 1);

	// If selection can be toggled do that
	if (core.startsWith(string1) && core.endsWith(string2)) {
		const inside = core.substr(string1.length, core.length - string1.length - string2.length);
		return selected.substr(0, start) + inside + selected.substr(end + 1);
	} else {
		return selected.substr(0, start) + string1 + core + string2 + selected.substr(end + 1);
	}
}

joplin.plugins.register({
	onStart: async function() {
		//console.info('joplin-plugin-menu-shortcut-toolbar: plugin started!');
		await settings.register();
		const activateOnlyIfEnabledInMarkdownSettings = await joplin.settings.value(ACTIVATE_ONLY_SETTING);
		const enableJoinLines                         = await joplin.settings.value(ENABLE_JOIN_LINES);
		const enableToggleOverwrite                   = await joplin.settings.value(ENABLE_TOGGLE_OVERWRITE);

		// process actions
		for (const actionName in actions) {
			const action = actions[actionName];

			let activate = true;

			if (activateOnlyIfEnabledInMarkdownSettings && actionName !== 'textStrikethrough') {
				activate = await joplin.settings.globalValue(action.markdownPluginSetting);
			}

			if (activate) {
				joplin.commands.register({
					name: actionName,
					label: action.label,
					enabledCondition: 'markdownEditorPaneVisible && !richTextEditorVisible',
					iconName: action.iconName,
					execute: async () => {
						const selectedText = (await joplin.commands.execute('selectedText') as string);

						const newText = wrapSelectionWithStrings(selectedText, action.wrapString, action.wrapString, action.defaultText);

						await joplin.commands.execute('replaceSelection', newText);
						await joplin.commands.execute('editor.focus');
					},
				});
				var toolbarIconEnabled = !(await joplin.settings.value(DTI_SETTINGS_PREFIX + actionName));
				if (toolbarIconEnabled) {
					joplin.views.toolbarButtons.create(actionName + 'Button', actionName, ToolbarButtonLocation.EditorToolbar);
				}
				joplin.views.menuItems.create(actionName + 'MenuItem', actionName, MenuItemLocation.Edit, { accelerator: action.accelerator });
			}

		}

		if (enableJoinLines) {
			await joplin.contentScripts.register(
				ContentScriptType.CodeMirrorPlugin,
				'joinLinesWorkaround',
				'./joinLinesWorkaround.js'
			);

			joplin.commands.register({
				name: 'editor.joinLines',
				label: 'Join lines',
				enabledCondition: 'markdownEditorPaneVisible && !richTextEditorVisible',
				execute: async () => {
					await joplin.commands.execute('editor.execCommand', {
						name: 'joinLines',
					});
				},
			});
			joplin.views.menuItems.create('editorJoinLinesMenuItem', 'editor.joinLines', MenuItemLocation.Edit, { accelerator: 'CmdOrCtrl+J' });
		}

		if (enableToggleOverwrite) {
			joplin.commands.register({
				name: 'editor.toggleOverwrite',
				label: 'Toggle overwrite',
				enabledCondition: 'markdownEditorPaneVisible && !richTextEditorVisible',
				execute: async () => {
					await joplin.commands.execute('editor.execCommand', {
						name: 'toggleOverwrite',
					});
				},
			});
			joplin.views.menuItems.create('editorToggleOverwriteMenuItem', 'editor.toggleOverwrite', MenuItemLocation.Edit, { accelerator: 'CmdOrCtrl+Shift+O' });
		}

	},
});
