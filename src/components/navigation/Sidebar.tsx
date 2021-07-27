import React, { Fragment } from "react";

import { XIcon } from "@heroicons/react/outline";

import { Country } from "../../models/country.model";

import { Dialog, Transition } from "@headlessui/react";

import { DetailScreen } from "../../screens/DetailScreen";

type SidebarProps = {
	country: Country | null;
	setCountry: (country: Country | null) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ country, setCountry }) => (
	<Transition.Root show={country != null} as={Fragment}>
		<Dialog
			as="div"
			static
			className="fixed inset-0 overflow-hidden"
			open={country != null}
			onClose={() => setCountry(null)}
		>
			<div className="absolute inset-0 overflow-hidden">
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>
				<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
					<Transition.Child
						as={Fragment}
						enter="transform transition ease-in-out duration-100 sm:duration-700"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-100 sm:duration-700"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<div className="relative w-screen max-w-md">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-100"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
									<button
										className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
										onClick={() => setCountry(null)}
									>
										<span className="sr-only">Close panel</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
							</Transition.Child>
							<DetailScreen country={country} />
						</div>
					</Transition.Child>
				</div>
			</div>
		</Dialog>
	</Transition.Root>
);
