import joplin from 'api';
import { MenuItemLocation } from 'api/types';
import { ToolbarButtonLocation } from 'api/types';

const actions = {
	textMark: {
		label: 'Mark',
		iconName: 'fas fa-highlighter',
		wrapString: '==',
		defaultText: 'marked text',
		accelerator: 'CmdOrCtrl+Shift+Y',
	},
	textStrikethrough: {
		label: 'Strikethrough',
		iconName: 'fas fa-strikethrough',
		wrapString: '~~',
		defaultText: 'striken text',
		accelerator: 'CmdOrCtrl+Shift+U',
	},
	textUnderline: {
		label: 'Underline',
		iconName: 'fas fa-underline',
		wrapString: '++',
		defaultText: 'underlined text',
		accelerator: 'CmdOrCtrl+U',
	},
};

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

		// process actions
		for (const actionName in actions) {
			const action = actions[actionName];

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
			joplin.views.toolbarButtons.create(actionName + 'Button', actionName, ToolbarButtonLocation.EditorToolbar);
			joplin.views.menuItems.create(actionName + 'MenuItem', actionName, MenuItemLocation.Edit, { accelerator: action.accelerator });
		}

	},
});
