import React from "react";

import { TableStates } from "./TableStates";
import { TableLanguages } from "./TableLanguages";

import { Country } from "../../../models/country.model";

type DetailSectionProps = {
	country: Country | null;
};

export const DetailSection: React.FC<DetailSectionProps> = ({ country }) => (
	<div className="flex flex-wrap justify-center items-center">
		<h1 style={{ fontSize: "1800%" }}>{country?.emoji}</h1>
		<div className="justify-start items-start">
			<h2 className="text-3xl text-gray-500 font-bold text-center mb-8">
				{country?.code.toUpperCase() +
					`${
						country?.currency == null
							? ""
							: ` - (${country?.currency?.toUpperCase()})`
					}`}
			</h2>
			{country?.phone !== null && (
				<h3 className="text-2xl text-gray-500 text-center font-semibold mb-8">
					{"+" + country?.phone}
				</h3>
			)}
			{country?.capital !== null && (
				<h3 className="text-2xl text-gray-500 text-center font-semibold mb-4">
					{"Capital: " + country?.capital}
				</h3>
			)}
			{country?.native !== "" && (
				<h4 className="text-xl text-gray-500 text-center font-semibold mb-8">
					{"Native: " + country?.native}
				</h4>
			)}
			<h2 className="text-3xl text-gray-500 font-bold text-center mb-8">
				{country?.continent?.name +
					`${
						country?.continent?.code == null
							? ""
							: ` - (${country?.continent?.code.toUpperCase()})`
					}`}
			</h2>
			{country?.states.length !== 0 && (
				<div className="mb-8">
					<TableStates states={country!.states} />
				</div>
			)}
			{country?.languages.length !== 0 && (
				<TableLanguages languages={country!.languages} />
			)}
		</div>
	</div>
);
