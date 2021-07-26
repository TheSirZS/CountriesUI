import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
	query {
		countries {
			code
			name
			phone
			emoji
			emojiU
			native
			capital
			currency
			continent {
				code
				name
			}
			languages {
				code
				name
				native
				rtl
			}
			states {
				code
				name
			}
		}
	}
`;
