import { State } from "./state.model";
import { Language } from "./language.model";
import { Continent } from "./continent.model";

export interface Country {
	code: string;
	name: string;
	emoji: string;
	phone: string;
	emojiU: string;
	native: string;
	capital: string;
	currency: string;
	states: State[];
	continent: Continent;
	languages: Language[];
}
