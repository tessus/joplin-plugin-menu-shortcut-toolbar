import joplin from "api";
import { SettingItemType } from "api/types";
import { actions } from "./common";

// async function returnEnabledMarkdownPlugins(actions: object) {
// 	let arr = [];

// 	for (const actionName in actions) {
// 		const action = actions[actionName];

// 		if (actionName !== 'textStrikethrough') {
// 			if (await joplin.settings.globalValue(action.markdownPluginSetting)) {
// 				arr.push(actionName.slice(4));
// 			}
// 		}
// 	}

// 	return arr.join(', ');
// }
export namespace settings {
	const SECTION = 'MenuShortcutToolbarSettings';

	export async function register() {
		await joplin.settings.registerSection(SECTION, {
			label: "Menu items, shortcuts, toolbar icons",
			iconName: "fas fa-tools",
		});

		//const enabledMarkdownPlugins = await returnEnabledMarkdownPlugins(actions);

		await joplin.settings.registerSettings({
			activateOnlyIfEnabledInMarkdownSettings: {
				public: true,
				section: SECTION,
				type: SettingItemType.Bool,
				value: false,
				label: 'Only activate, if enabled in Markdown Plugin settings',
				description: "Only activate menu items, shortcuts, and toolbar icons for markdown plugins which are enabled in Joplin's settings. (requires restart)",
			},
		});

	}
}
