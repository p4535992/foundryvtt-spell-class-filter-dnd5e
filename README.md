# Multiclass Spellbook filter for 5e

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-spell-class-filter-dnd5e/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fspell-class-filter-dnd5e&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=spell-class-filter-dnd5e)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-spell-class-filter-dnd5e%2Fmaster%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-spell-class-filter-dnd5e%2Fmaster%2Fsrc%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fspell-class-filter-dnd5e%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/spell-class-filter-dnd5e/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-spell-class-filter-dnd5e/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/spell-class-filter-dnd5e/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/spell-class-filter-dnd5e/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

This module adds options for players to organize their spellbook by which class the spell is for.  Useful for multiclass characters or characters with the magic initiate feat.

To get the filter to work, you will need to populate the data in each spell.

![animated demo](wiki/images/Multiclass_Spellbook_Filter_1.gif)

![example image](wiki/images/Multiclass_Spellbook_Filter_2.png)

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-spell-class-filter-dnd5e/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

## Additional documentation

This module is specific to the dnd5e system and is not designed to work with other systems.

### Configuring this module
All settings for this module are found in Foundry's settings menu under the module settings tab.

Currently all of the settings that are available are client-side settings.  This means that what you change here will not have an effect on any other computer or player.

### Using the filter
This module relies on populating data that doesn't seem to exist by default: "Is this spell a {class} spell for you?"  So the first step is going to be going through each spell on your sheet and selecting the spell's class in the itemsheet's details tab.

<div class="info">
  <p><strong>Note:</strong> Your selection does not change which ability modifier your spell uses. That is configured elsewhere in the sheet.</p>
</div>

Afterwards, if the proper setting is enabled, you will see a dropdown menu at the top of the spellbook with the rest of the filters.  Selecting an one of the classes will hide all of the spells that don't match your selection.

### Icon Replacement
Some players find it helpful to differentiate spells by class even when the list is not filtered.  To help with that this module provides the option to 'cover' the spell's icon in the spellbook with the icon of their source class.

To enable this behavior enable it in the module's settings. This setting is disabled by default.

<div class="info">
  <p><strong>Note:</strong> This feature does not change any data or other behaviors.  The spell's icon will still be what is displayed in chat and in other sections of the sheet.
  </p>
</div>

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-spell-class-filter-dnd5e/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).
