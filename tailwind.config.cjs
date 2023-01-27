/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				rubik: "'Rubik', sans-serif"
			},
			backgroundImage: {
				main: 'url(/src/assets/main-bg.png)'
			}
		}
	},
	plugins: []
}
