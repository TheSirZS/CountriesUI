import React from "react";

import { ApolloError } from "@apollo/client";

import ERROR from "../assets/images/error.png";

type ErrorScreenProps = {
	error?: ApolloError;
};

export const ErrorScreen: React.FC<ErrorScreenProps> = ({ error }) => (
	<div
		className={
			"flex w-screen h-screen justify-center items-center m-0 bg-gray-50"
		}
	>
		<div
			className="
    max-w-md w-full"
		>
			<img
				className={"object-cover w-80 h-80 mb-6 m-auto"}
				alt={"Not found"}
				src={ERROR}
			/>
			<h1 className="text-3xl lg:text-4xl font-semibold text-center text-gray-500 leading-normal mb-4">
				An error has occurred
			</h1>
			{error?.message && (
				<p className="font-semibold text-center text-gray-500 leading-normal">
					{"Message: " + error.message}
				</p>
			)}
		</div>
	</div>
);
