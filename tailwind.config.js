/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				banner:
					"url('https://res.cloudinary.com/itgenius/image/upload/v1682573872/Rectangle_630_1_wtydtv.png')",
			},
		},
	},
	plugins: [],
};
