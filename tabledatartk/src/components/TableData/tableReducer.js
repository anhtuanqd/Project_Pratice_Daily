import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getData = createAsyncThunk('tableReducer/getData', async () => {
     return await axios
          .get('https://625ce68595cd5855d6178b7b.mockapi.io/dataset')
          .then((res) => {
               return res.data
          })
})

const tableReducer = createSlice({
     name: 'tableReducer',
     initialState: {
          data: []
     },
     reducers: {},
     extraReducers: {
          [getData.pending]: (state, action) => {
               state.loading = true
          },
          [getData.fulfilled]: (state, action) => {
               state.loading = true
               state.data = action.payload
          },
          [getData.rejected]: (state, action) => {
               state.loading = false
          }
     }
})

export default tableReducer.reducer
