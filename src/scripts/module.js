import "./api.js";
import "./constants.js";
import { applySpellClassFilterActorSheet, applySpellClassFilterItemSheet } from "./spellClassFilter.js";
export const initHooks = () => {};
export const setupHooks = () => {};
export const readyHooks = async () => {
	console.log("spell-class-filter-for-5e | Initializing");
	//@ts-ignore
	Object.keys(CONFIG.Actor.sheetClasses.character).forEach((key) => {
		let sheet = key.split(".")[1];
		try {
			Hooks.on("render" + sheet, (app, html, data) => {
				applySpellClassFilterActorSheet(app, html, data);
			});
		} catch (error) {
			console.warn("spell-class-filter-for-5e | can't hook to " + key);
		}
	});
	//@ts-ignore
	// Object.keys(CONFIG.Actor.sheetClasses.npc).forEach((key) => {
	//     let sheet = key.split(".")[1];
	//     try {
	//         Hooks.on("render" + sheet, (app, html, data) => {
	//             applySpellClassFilterItemSheet(app, html, data);
	//         });
	//     }
	//     catch (error) {
	//        console. warn("spell-class-filter-for-5e | can't hook to " + key);
	//     }
	// });

	//@ts-ignore
	Object.keys(CONFIG.Item.sheetClasses).forEach((key) => {
		let sheet = key.split(".")[1];
		try {
			Hooks.on("render" + sheet, (app, html, data) => {
				applySpellClassFilterItemSheet(app, html, data);
			});
		} catch (error) {
			console.warn("spell-class-filter-for-5e | can't hook to " + key);
		}
	});
};
// ==========================================
