import { AnyAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { RootState } from '../store'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: (state) => {
      state.value = initialState.value
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { reset, increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount: number): any => (dispatch: Dispatch<AnyAction>) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectValue = (state: RootState) => state.counter.value

export default counterSlice.reducer
