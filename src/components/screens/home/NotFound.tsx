import React from "react";

import NOT_FOUND from "../../../assets/images/not-found.png";

export const NotFound: React.FC = () => (
	<div className="flex items-center justify-center py-10">
		<img
			className={"object-cover w-80 h-80"}
			alt={"Not found"}
			src={NOT_FOUND}
		/>
	</div>
);
