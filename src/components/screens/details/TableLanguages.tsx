import React from "react";

import { Language } from "../../../models/language.model";

type TableLanguagesProps = {
	languages: Language[] | null;
};

export const TableLanguages: React.FC<TableLanguagesProps> = ({
	languages,
}) => {
	return (
		<div className="rounded-lg shadow-2xl ">
			<table className="table-fixed w-full bg-white">
				<thead>
					<tr>
						{["Languages", "Code", "Native", "RTL"].map((key, i) => (
							<th className="text-sm font-bold px-4 py-2" key={i}>
								{key}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{languages?.map((language, i) => (
						<tr className={i % 2 ? "bg-white" : "bg-gray-100"} key={i}>
							<td className="border text-sm text-center font-medium px-4 py-2">
								{language.name}
							</td>
							{language.code != null ? (
								<td className="border text-sm text-center font-medium px-4 py-2">
									{language.code.toUpperCase()}
								</td>
							) : (
								<td className="border text-sm text-center font-medium px-4 py-2">
									-
								</td>
							)}
							{language.native != null ? (
								<td className="border text-sm text-center font-medium px-4 py-2">
									{language.native}
								</td>
							) : (
								<td className="border text-sm text-center font-medium px-4 py-2">
									-
								</td>
							)}
							{language.rtl != null ? (
								<td className="border text-sm text-center font-medium px-4 py-2">
									{language.rtl ? "Practiced" : "Not practiced"}
								</td>
							) : (
								<td className="border text-sm text-center font-medium px-4 py-2">
									-
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
