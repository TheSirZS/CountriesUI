import React from "react";

type TextFieldProps = {
	type: string;
	name: string;
	value: string;
	placeholder: string;
	icon: React.ReactNode;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField: React.FC<TextFieldProps> = ({
	icon,
	type,
	name,
	value,
	onChange,
	placeholder,
}) => (
	<div className="relative flex w-full flex-wrap items-stretch shadow-xl rounded-full duration-500 ease-in-out transform lg:hover:scale-110">
		<div className="absolute right-0 lg:p-2 z-10 p-1">
			<div className="bg-indigo-500 text-white rounded-full focus:outline-none w-10 h-10 flex items-center justify-center">
				{icon}
			</div>
		</div>
		<input
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			autoComplete={"off"}
			placeholder={placeholder}
			className="transition duration-500 ease-in-out transform rounded-full w-full p-4 lg:text-base sm:text-sm text-xs text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
		/>
	</div>
);
