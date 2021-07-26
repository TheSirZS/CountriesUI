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
	<div className="bg-white flex items-center rounded-full shadow-xl w-full">
		<input
			className="rounded-l-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			autoComplete={"off"}
		/>
		<div className="p-2">
			<div className="bg-indigo-500 text-white rounded-full p-2 focus:outline-none w-10 h-10 flex items-center justify-center">
				{icon}
			</div>
		</div>
	</div>
);
