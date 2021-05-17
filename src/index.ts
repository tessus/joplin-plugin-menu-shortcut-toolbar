import joplin from 'api';
import { MenuItemLocation } from 'api/types';
import { ToolbarButtonLocation } from 'api/types';

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

		// mark text
		joplin.commands.register({
			name: 'textMark',
			label: 'Mark',
			iconName: 'fas fa-highlighter',
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);

				const newText = wrapSelectionWithStrings(selectedText, '==', '==', 'marked text');

				await joplin.commands.execute('replaceSelection', newText);
				await joplin.commands.execute('editor.focus');
			},
		});
		joplin.views.toolbarButtons.create('textMarkButton', 'textMark', ToolbarButtonLocation.EditorToolbar);
		joplin.views.menuItems.create('textMarkMenuItem', 'textMark', MenuItemLocation.Edit, { accelerator: 'CmdOrCtrl+Shift+Y' });

		// strikethrough text
		joplin.commands.register({
			name: 'textStrikethrough',
			label: 'Strikethrough',
			iconName: 'fas fa-strikethrough',
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);

				const newText = wrapSelectionWithStrings(selectedText, '~~', '~~', 'striken text');

				await joplin.commands.execute('replaceSelection', newText);
				await joplin.commands.execute('editor.focus');
			},
		});
		joplin.views.toolbarButtons.create('textStrikethroughButton', 'textStrikethrough', ToolbarButtonLocation.EditorToolbar);
		joplin.views.menuItems.create('textStrikethroughMenuItem', 'textStrikethrough', MenuItemLocation.Edit, { accelerator: 'CmdOrCtrl+Shift+U' });

	},
});
