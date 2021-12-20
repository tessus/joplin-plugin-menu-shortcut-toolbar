import joplin from "api";
import { SettingItemType } from "api/types";
import { 
	actions, DTI_SETTINGS_PREFIX, ACTIVATE_ONLY_SETTING, ENABLE_JOIN_LINES, ENABLE_TOGGLE_OVERWRITE, 
	CUSTOM_TEXT_WRAP_1_PREFIX, CUSTOM_TEXT_WRAP_1_POSTFIX, 
	CUSTOM_TEXT_WRAP_2_PREFIX, CUSTOM_TEXT_WRAP_2_POSTFIX 
} from "./common";

export namespace settings {
	const SECTION = 'MenuShortcutToolbarSettings';

	export async function register() {
		await joplin.settings.registerSection(SECTION, {
			label: "Menu items, shortcuts, toolbar icons",
			iconName: "fas fa-tools",
		});

		let PLUGIN_SETTINGS = {};

		PLUGIN_SETTINGS[ACTIVATE_ONLY_SETTING] = {
			value: false,
			public: true,
			section: SECTION,
			type: SettingItemType.Bool,
			label: 'Only activate, if enabled in Markdown Plugin settings',
			description: "Only activate menu items, shortcuts, and toolbar icons for markdown plugins which are enabled in Joplin's settings. (requires restart)",
		}

		PLUGIN_SETTINGS[ENABLE_JOIN_LINES] = {
			value: true,
			public: true,
			section: SECTION,
			type: SettingItemType.Bool,
			label: 'Enable "join lines" in editor',
			description: "The markdown editor (CodeMirror) provides a function to join lines. This option enables it. (requires restart)",
		}

		PLUGIN_SETTINGS[ENABLE_TOGGLE_OVERWRITE] = {
			value: false,
			public: true,
			section: SECTION,
			type: SettingItemType.Bool,
			label: 'Enable "toggle overwrite mode" in editor',
			description: "The markdown editor (CodeMirror) provides a function to toggle overwrite mode. This option enables it. (requires restart)",
		}

		
		// CUSTOM WRAP TEXT 1
		PLUGIN_SETTINGS[CUSTOM_TEXT_WRAP_1_PREFIX] = {
			value: '<span style="color: red">',
			public: true,
			section: SECTION,
			type: SettingItemType.String,
			label: 'Custom prefix 1',
			// description: "Create a custom prefix / postfix combination to be inserted before/after highlighted text.",
		}
		
		PLUGIN_SETTINGS[CUSTOM_TEXT_WRAP_1_POSTFIX] = {
			value: '</span>',
			public: true,
			section: SECTION,
			type: SettingItemType.String,
			label: 'Custom postfix 1',
			// description: "Create a custom prefix / postfix combination to be inserted before/after highlighted text.",
		}		
		// END CUSTOM WRAP TEXT 1

		// CUSTOM WRAP TEXT 2
		PLUGIN_SETTINGS[CUSTOM_TEXT_WRAP_2_PREFIX] = {
			value: '<span style="color: orange">',
			public: true,
			section: SECTION,
			type: SettingItemType.String,
			label: 'Custom prefix 2',
			// description: "Create a custom prefix / postfix combination to be inserted before/after highlighted text.",
		}
		
		PLUGIN_SETTINGS[CUSTOM_TEXT_WRAP_2_POSTFIX] = {
			value: '</span>',
			public: true,
			section: SECTION,
			type: SettingItemType.String,
			label: 'Custom postfix 2',
			// description: "Create a custom prefix / postfix combination to be inserted before/after highlighted text.",
		}		
		// END CUSTOM WRAP TEXT 2

		for (const actionName in actions) {
			const action = actions[actionName];
			var setting = DTI_SETTINGS_PREFIX + actionName;

			PLUGIN_SETTINGS[setting] = {
				value: false,
				public: true,
				section: SECTION,
				advanced: true,
				type: SettingItemType.Bool,
				label: 'Remove toolbar icon for ' + action.stringPrefix + action.label + action.stringPostfix + ' (requires restart)',
			}
		}

		await joplin.settings.registerSettings(PLUGIN_SETTINGS);
	}
}
