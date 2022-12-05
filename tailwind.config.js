module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './**/*.html'],
	theme: {
		extend: {
			colors: {
				cinder: {
					100: '#656d72',
					200: '#232e35',
				},
				ocean: {
					100: '#edf7ff',
					200: '#d2e6fb',
					300: '#75baff',
				},
			},
			fontFamily: {
				inter: 'Inter, sans-serif',
				jakarta: 'Plus Jakarta Sans, sans-serif',
				belle: 'La Belle Aurore, cursive',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [],
}
