export const actions = {
	textMark: {
		label: 'Mark',
		iconName: 'fas fa-highlighter',
		stringPrefix: '==',
		stringPostfix: '==',
		defaultText: 'marked text',
		accelerator: 'CmdOrCtrl+Shift+Y',
		markdownPluginSetting: 'markdown.plugin.mark',
	},
	textStrikethrough: {
		label: 'Strikethrough',
		iconName: 'fas fa-strikethrough',
		stringPrefix: '~~',
		stringPostfix: '~~',
		defaultText: 'struck out text',
		accelerator: 'CmdOrCtrl+Shift+U',
	},
	textUnderline: {
		label: 'Underline',
		iconName: 'fas fa-underline',
		stringPrefix: '++',
		stringPostfix: '++',
		defaultText: 'underlined text',
		accelerator: 'CmdOrCtrl+U',
		markdownPluginSetting: 'markdown.plugin.insert',
	},
	textSuperscript: {
		label: 'Superscript',
		iconName: 'fas fa-superscript',
		stringPrefix: '^',
		stringPostfix: '^',
		defaultText: 'superscript text',
		accelerator: null,
		markdownPluginSetting: 'markdown.plugin.sup',
	},
	textSubscript: {
		label: 'Subscript',
		iconName: 'fas fa-subscript',
		stringPrefix: '~',
		stringPostfix: '~',
		defaultText: 'subscript text',
		accelerator: null,
		markdownPluginSetting: 'markdown.plugin.sub',
	},
	textRedColor: {
		label: 'RedColor',
		iconName: 'fas fa-font',
		stringPrefix: '<span style="color: red">',
		stringPostfix: '</span>',
		defaultText: 'color red text',
		accelerator: 'CmdOrCtrl+Shift+R',
		markdownPluginSetting: 'markdown.plugin.sub',
	},
};

export const DTI_SETTINGS_PREFIX      = 'disableToolbarIcon.';
export const ACTIVATE_ONLY_SETTING    = 'activateOnlyIfEnabledInMarkdownSettings';
export const ENABLE_JOIN_LINES        = 'enableJoinLines';
export const ENABLE_TOGGLE_OVERWRITE  = 'enableToggleOverwrite';

export default {
	actions,
	DTI_SETTINGS_PREFIX,
	ACTIVATE_ONLY_SETTING,
	ENABLE_JOIN_LINES,
	ENABLE_TOGGLE_OVERWRITE,
}
