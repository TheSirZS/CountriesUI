import React from "react";
import { Country } from "../../models/country.model";

type CountryCardProps = {
	country: Country;
	isSelected: boolean;
	setCountry: () => void;
};

export const CountryCard: React.FC<CountryCardProps> = ({
	country,
	isSelected,
	setCountry,
}) => (
	<div
		onClick={setCountry}
		className={`${
			isSelected ? "bg-gray-200" : ""
		} w-full py-8 lg:w-64 m-auto max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer`}
	>
		<div className="flex items-center justify-center">
			<h1 className="text-9xl">{country.emoji}</h1>
		</div>
		<div className="flex items-center justify-center">
			<h1 className="text-xl font-bold pt-4 text-gray-700 text-center">
				{country.name}
			</h1>
		</div>
	</div>
);
