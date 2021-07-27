import React from "react";

export const Footer: React.FC = () => (
	<footer className="footer bg-white relative">
		<div className="container mx-auto px-6">
			<div className="mt-16 border-t-2 border-indigo-500 flex flex-col items-center">
				<div className="sm:w-2/3 text-center py-6">
					<p className="text-sm text-gray-500 font-bold mb-2">
						© {new Date().getFullYear()} - Diego Aragon
					</p>
				</div>
			</div>
		</div>
	</footer>
);
