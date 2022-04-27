import { createSlice } from '@reduxjs/toolkit'

const tableReducer = createSlice({
     name: 'tableReducer',
     initialState: {
          data: []
     },
     reducers: {
          getData: (state, action) => {
               state.data = action.payload
          },
          editData: (state, action) => {
               console.log(action.payload)
               state.data[action.payload.index].name = action.payload.value
          }
     }
})

const { actions, reducer } = tableReducer
export const { getData, editData } = actions

export default reducer
