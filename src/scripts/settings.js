import CONSTANTS from "./constants.js";

export const registerSettings = function () {
	// =====================================================================

	game.settings.register(CONSTANTS.MODULE_ID, "spellClassFilterSelect", {
		name: `${game.i18n.localize("spell-class-filter-for-5e.settings.spellClassFilterSelect.name")}`,
		hint: `${game.i18n.localize("spell-class-filter-for-5e.settings.spellClassFilterSelect.hint")}`,
		scope: "client",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register(CONSTANTS.MODULE_ID, "spellClassFilterIconReplace", {
		name: `${game.i18n.localize("spell-class-filter-for-5e.settings.spellClassFilterIconReplace.name")}`,
		hint: `${game.i18n.localize("spell-class-filter-for-5e.settings.spellClassFilterIconReplace.hint")}`,
		scope: "client",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register(CONSTANTS.MODULE_ID, "spellClassFilterAdditionalClasses", {
		name: `${game.i18n.localize("spell-class-filter-for-5e.settings.spellClassFilterAdditionalClasses.name")}`,
		hint: `${game.i18n.localize("spell-class-filter-for-5e.settings.spellClassFilterAdditionalClasses.hint")}`,
		scope: "client",
		config: true,
		default: "",
		type: String
	});

	// ========================================================================

	// game.settings.register(CONSTANTS.MODULE_NAME, "debug", {
	// 	name: `${CONSTANTS.MODULE_NAME}.setting.debug.name`,
	// 	hint: `${CONSTANTS.MODULE_NAME}.setting.debug.hint`,
	// 	scope: "client",
	// 	config: true,
	// 	default: false,
	// 	type: Boolean
	// });
};
