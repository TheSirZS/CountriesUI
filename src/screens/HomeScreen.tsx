import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { useForm } from "../hooks/useForm";

import { LoadingScreen } from "./LoadingScreen";

import { Country } from "../models/country.model";

import { GET_COUNTRIES } from "../graphql/queries";

import { Footer } from "../components/footer/Footer";
import { Sidebar } from "../components/navigation/Sidebar";
import { HeroSection } from "../components/screens/home/HeroSection";
import { CountriesSection } from "../components/screens/home/CountriesSection";

export const HomeScreen: React.FC = () => {
	const [formState, setFormState] = useForm({ search: "" });
	const [country, setCountry] = useState<Country | null>(null);
	const [results, setResults] = useState<Country[] | null>(null);

	const { search } = formState;

	const { loading, data } = useQuery(GET_COUNTRIES, {
		fetchPolicy: "cache-first",
	});

	useEffect(() => {
		if (data) {
			const filter = search.toLowerCase();
			const results = data.countries.filter(
				(country: Country) =>
					country.name?.toLowerCase().includes(filter) ||
					country.code?.toLowerCase().includes(filter) ||
					country.currency?.toLowerCase().includes(filter) ||
					country.continent?.name?.toLowerCase().includes(filter) ||
					country.languages?.some((language) =>
						language.name?.toLowerCase().includes(filter)
					)
			);
			setResults(results);
		}
	}, [data, search]);

	if (loading) return <LoadingScreen />;

	return (
		<>
			<div className="bg-gray-50 h-full">
				<div className="max-w-7xl mx-auto sm:py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
					<Sidebar country={country} setCountry={setCountry} />
					<main className="flex flex-col grid-flow-col">
						<HeroSection value={search} onChange={(e) => setFormState(e)} />
					</main>
				</div>
			</div>
			<CountriesSection
				current={country}
				setCountry={setCountry}
				isTyping={search !== ""}
				countries={results?.length === 0 ? data.countrie : results}
			/>
			<Footer />
		</>
	);
};
