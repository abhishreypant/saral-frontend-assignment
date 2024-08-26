module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					100: "#f6f6f6",
					200: "#eeeeee",
				},
			},
		},
	},

	plugins: [],
	safelist: [{ pattern: /border-./ }, { pattern: /h-./ }],
};
