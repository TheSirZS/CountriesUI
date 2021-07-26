import React from "react";

import { Dialog } from "@headlessui/react";

import { Country } from "../models/country.model";

type DetailScreenProps = {
	country: Country | null;
};

export const DetailScreen: React.FC<DetailScreenProps> = ({ country }) => {
	return (
		<div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
			<div className="px-4 sm:px-6">
				<Dialog.Title className="text-3xl font-bold text-gray-900">
					{country?.name}
				</Dialog.Title>
			</div>
			<div className="mt-6 relative flex-1 px-4 sm:px-6">
				{country == null && (
					<div className="flex justify-center items-center"></div>
				)}
			</div>
		</div>
	);
};
