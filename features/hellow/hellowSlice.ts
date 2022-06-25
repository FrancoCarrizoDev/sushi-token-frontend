import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HellowState {
  hellow: string
}

const initialState: HellowState = {
  hellow: ''
}

export const hellowSlice = createSlice({
  name: 'hellow',
  initialState,
  reducers: {
    greeting: (state, action: PayloadAction<string>) => {
      state.hellow = `hellow ${action.payload}`
    }
  }
})

// Action creators are generated for each case reducer function
export const { greeting } = hellowSlice.actions

export default hellowSlice.reducer
