import React from "react";
import { Country } from "../../../models/country.model";
import { CountryCard } from "../../cards/CountryCard";

type CountriesSectionProps = {
	isTyping: boolean;
	current: Country | null;
	countries: Country[] | null;
	setCountry: (country: Country | null) => void;
};

export const CountriesSection: React.FC<CountriesSectionProps> = ({
	current,
	isTyping,
	countries,
	setCountry,
}) => (
	<div className="container py-6 mx-auto px-4 md:px-12">
		<div className="flex justify-center items-center mb-6">
			<h1 className="text-3xl lg:text-4xl font-medium text-gray-700 leading-normal">
				{!isTyping
					? "Type and know more about a country"
					: "Total results: " +
					  `${countries?.length === undefined ? "0" : countries?.length}`}
			</h1>
		</div>
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-y-10">
			{countries?.slice(0, 4).map((country, i) => (
				<CountryCard
					key={i}
					country={country}
					setCountry={() => setCountry(country)}
					isSelected={current?.code === country.code}
				/>
			))}
		</div>
	</div>
);
