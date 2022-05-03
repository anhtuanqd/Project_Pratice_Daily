import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ReducersRegister from '../../Reducers/Helpers/ReducerRegister'

export const getDataItems = createAsyncThunk(
     'tableReducer/fetchDataCovid',
     async () => {
          const res = await fetch(
               'https://625ce68595cd5855d6178b7b.mockapi.io/dataset'
          ).then((data) => data.json())
          return res
     }
)

const tableReducer = createSlice({
     name: 'tableReducer',
     initialState: {
          data: [],
          ids: []
     },
     reducers: {
          getData: (state, action) => {
               state.data = action.payload
          },
          editData: (state, action) => {
               state.data[action.payload.id].name = action.payload.value
          }
     },
     extraReducers: (builder) => {
          builder.addCase(getDataItems.fulfilled, (state, action) => {
               const object = action.payload.reduce((prev, current) => {
                    prev[current.id] = current
                    return prev
               }, [])
               state.data = object
               state.ids = Object.keys(object)
          })
     }
})
const { actions } = tableReducer
export const { getData, editData } = actions

ReducersRegister.register(tableReducer.name, tableReducer.reducer)
