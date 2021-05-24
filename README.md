# Menu items, Shortcuts, Toolbar icons

Additional menu items, shortcuts, and toolbar icons, which are not part of Joplin core.

This plugin creates menu items (in `Edit`), shortcuts (defaults can be changed), and toolbar icons for the following actions:

- mark
- strikethrough
- underline
- superscript
- subscript

## Default Shortcuts and Command Names

| Action         | Default Shortcut    | command            |
|----------------|---------------------|--------------------|
| mark           | `CmdOrCtrl+Shift+Y` | textMark           |
| strikethrough  | `CmdOrCtrl+Shift+U` | textStrikethrough  |
| underline      | `CmdOrCtrl+U`       | textUnderline      |
| superscript    |                     | textSuperscript    |
| subscript      |                     | textSubscript      |

The shortcuts can be changed in the shortcut editor (`Settings > Keyboard Shortcuts`) or in the `keymap-desktop.json` file.

# Settings

**Please note:** All settings require a restart of Joplin.

`Only activate, if enabled in Markdown Plugin settings`: Only activate menu items, shortcuts, and toolbar icons for markdown plugins which are enabled in Joplin's settings.

Under `Show Advanced Settings` it is possible to disable toolbar icons for individual actions.

# Changelog

The [Changelog](https://github.com/tessus/joplin-plugin-menu-shortcut-toolbar/blob/master/Changelog.md) is located in a separate file.
