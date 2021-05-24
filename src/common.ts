export const actions = {
	textMark: {
		label: 'Mark',
		iconName: 'fas fa-highlighter',
		wrapString: '==',
		defaultText: 'marked text',
		accelerator: 'CmdOrCtrl+Shift+Y',
		markdownPluginSetting: 'markdown.plugin.mark',
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
		markdownPluginSetting: 'markdown.plugin.insert',
	},
};
