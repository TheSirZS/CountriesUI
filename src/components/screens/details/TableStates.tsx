import React from "react";

import { State } from "../../../models/state.model";

type TableStatesProps = {
	states: State[] | null;
};

export const TableStates: React.FC<TableStatesProps> = ({ states }) => {
	return (
		<div className="rounded-lg shadow-2xl ">
			<table className="table-fixed w-full bg-white">
				<thead>
					<tr>
						{["States", "Code"].map((key, i) => (
							<th className="text-sm font-bold px-4 py-2" key={i}>
								{key}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{states?.map((state, i) => (
						<tr className={i % 2 ? "bg-white" : "bg-gray-100"} key={i}>
							<td className="border text-sm text-center font-medium px-4 py-2">
								{state.name}
							</td>
							{state.code != null ? (
								<td className="border text-sm text-center font-medium px-4 py-2">
									{state.code}
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
