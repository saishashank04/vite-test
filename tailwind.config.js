const colors = require("tailwindcss/colors");

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			blue: colors.blue,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			teal: colors.teal,
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
