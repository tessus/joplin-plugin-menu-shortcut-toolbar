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
	textCustomWrap1: {
		label: 'CustomWrap1',
		iconName: 'fas fa-font',
		stringPrefix: 'CUSTOM_TEXT_WRAP_1_PREFIX',
		stringPostfix: 'CUSTOM_TEXT_WRAP_1_POSTFIX',
		defaultText: 'custom text wrap 1',
		accelerator: 'CmdOrCtrl+Shift+R',
		markdownPluginSetting: 'markdown.plugin.customwrap1',
	},
	textCustomWrap2: {
		label: 'CustomWrap2',
		iconName: 'fas fa-font',
		stringPrefix: 'CUSTOM_TEXT_WRAP_2_PREFIX',
		stringPostfix: 'CUSTOM_TEXT_WRAP_2_POSTFIX',
		defaultText: 'custom text wrap 2',
		accelerator: null,
		markdownPluginSetting: 'markdown.plugin.customwrap2',
	},
};

export const DTI_SETTINGS_PREFIX      = 'disableToolbarIcon.';
export const ACTIVATE_ONLY_SETTING    = 'activateOnlyIfEnabledInMarkdownSettings';
export const ENABLE_JOIN_LINES        = 'enableJoinLines';
export const ENABLE_TOGGLE_OVERWRITE  = 'enableToggleOverwrite';
export const CUSTOM_TEXT_WRAP_1_PREFIX  = 'customPrefix1';
export const CUSTOM_TEXT_WRAP_1_POSTFIX  = 'customPostfix1';
export const CUSTOM_TEXT_WRAP_2_PREFIX  = 'customPrefix2';
export const CUSTOM_TEXT_WRAP_2_POSTFIX  = 'customPostfix2';

export default {
	actions,
	DTI_SETTINGS_PREFIX,
	ACTIVATE_ONLY_SETTING,
	ENABLE_JOIN_LINES,
	ENABLE_TOGGLE_OVERWRITE,
	CUSTOM_TEXT_WRAP_1_PREFIX,
	CUSTOM_TEXT_WRAP_1_POSTFIX,
	CUSTOM_TEXT_WRAP_2_PREFIX,
	CUSTOM_TEXT_WRAP_2_POSTFIX
}
