import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
}

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		toggleMenu(state) {
			state.isOpen = !state.isOpen
			if (state.isOpen === true) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = 'auto'
			}
		},
		closeMenu(state) {
			state.isOpen = false
			document.body.style.overflow = 'auto'
		},
	},
})

export const { toggleMenu, closeMenu } = menuSlice.actions

export default menuSlice.reducer
