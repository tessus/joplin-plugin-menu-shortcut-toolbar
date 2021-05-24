import joplin from "api";
import { SettingItemType } from "api/types";
import { actions, DTI_SETTINGS_PREFIX, ACTIVATE_ONLY_SETTING } from "./common";

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

		for (const actionName in actions) {
			const action = actions[actionName];
			var setting = DTI_SETTINGS_PREFIX + actionName;

			PLUGIN_SETTINGS[setting] = {
				value: false,
				public: true,
				section: SECTION,
				advanced: true,
				type: SettingItemType.Bool,
				label: 'Disable toolbar icon for ' + action.wrapString + action.label + action.wrapString + ' (requires restart)',
			}
		}

		await joplin.settings.registerSettings(PLUGIN_SETTINGS);
	}
}
