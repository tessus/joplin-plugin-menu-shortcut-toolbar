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
		defaultText: 'struck out text',
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
	textSuperscript: {
		label: 'Superscript',
		iconName: 'fas fa-superscript',
		wrapString: '^',
		defaultText: 'superscript text',
		accelerator: null,
		markdownPluginSetting: 'markdown.plugin.sup',
	},
	textSubscript: {
		label: 'Subscript',
		iconName: 'fas fa-subscript',
		wrapString: '~',
		defaultText: 'subscript text',
		accelerator: null,
		markdownPluginSetting: 'markdown.plugin.sub',
	},
};

export const DTI_SETTINGS_PREFIX      = 'disableToolbarIcon.';
export const ACTIVATE_ONLY_SETTING    = 'activateOnlyIfEnabledInMarkdownSettings';
export const ENABLE_JOIN_LINES        = 'enableJoinLines';

export default {
	actions,
	DTI_SETTINGS_PREFIX,
	ACTIVATE_ONLY_SETTING,
	ENABLE_JOIN_LINES,
}
