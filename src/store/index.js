import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import themeReducer from './slices/themeSlice'
import dropdownReducer from './slices/dropdownSlice'

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		theme: themeReducer,
		dropdown: dropdownReducer,
	},
})
