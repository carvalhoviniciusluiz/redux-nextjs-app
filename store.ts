import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: couterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
