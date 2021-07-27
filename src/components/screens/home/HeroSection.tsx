import React from "react";

import { TextField } from "../../inputs/TextField";

import LOGO from "../../../assets/images/search.png";

import { SearchIcon } from "@heroicons/react/outline";

import { LazyLoadImage } from "react-lazy-load-image-component";

type HeroSectionProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
	value,
	onChange,
}) => (
	<div className="max-w-screen-xl sm:mt-6 lg:px-6 xl:px-12 mx-auto">
		<div className="grid grid-flow-row lg:grid-flow-col md:grid-rows-1 sm:grid-cols-2 gap-8 py-6">
			<div className=" flex flex-col justify-center row-start-2 items-start sm:row-start-1">
				<h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-normal">
					Find everything about a country with{" "}
					<strong>Countries GraphQL API</strong>.
				</h1>
				<p className="text-gray-700 mt-4 mb-6">
					It provides the results of the countries based on their name or code
					to access each of their properties, part of the{" "}
					<strong>Crehana</strong> technical challenge.
				</p>
				<TextField
					value={value}
					type={"text"}
					name={"search"}
					onChange={onChange}
					placeholder="Type some characteristic of a country..."
					icon={<SearchIcon className="h-6 w-6" aria-hidden="true" />}
				/>
			</div>
			<div className="flex w-full">
				<LazyLoadImage
					className={"object-cover w-full"}
					alt={"Hero logo"}
					src={LOGO}
				/>
			</div>
		</div>
	</div>
);
