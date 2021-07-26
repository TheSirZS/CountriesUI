import React from "react";

export const LoadingScreen: React.FC = () => (
	<div
		className={
			"flex w-screen h-screen justify-center items-center m-0 bg-gray-50"
		}
	>
		<div className={"loading-chase"}>
			<div className={"loading-chase-dot"}></div>
			<div className={"loading-chase-dot"}></div>
			<div className={"loading-chase-dot"}></div>
			<div className={"loading-chase-dot"}></div>
			<div className={"loading-chase-dot"}></div>
			<div className={"loading-chase-dot"}></div>
		</div>
	</div>
);
