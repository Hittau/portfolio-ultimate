import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	darkmode: localStorage.getItem('darkmode') === 'true' || false,
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme(state) {
			state.darkmode = !state.darkmode
			localStorage.setItem('darkmode', state.darkmode)
		},
	},
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
