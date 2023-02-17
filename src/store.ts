import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {}
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export type AppDispatch = typeof store.dispatch
export default store