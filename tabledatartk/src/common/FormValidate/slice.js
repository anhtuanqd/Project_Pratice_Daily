import { createSlice } from '@reduxjs/toolkit'
import ReducerRegister from '../../Reducers/Helpers/ReducerRegister'

const slice = createSlice({
    name: 'formValidate',
    initialState: {
        values: {},
        errors: {},
        submitted: false
    },
    reducers: {
        changeValue: (state, action) => {
            state.values[action.payload.name] = action.payload.value
        },
        handleSubmit: (state) => {
            state.submitted = true
        },
        resetError: (state) => {
            state.errors = {}
        },
        addErrors: (state, action) => {
            state.errors = action.payload
        },
        resetSubmit: (state) => {
            state.submitted = false
        }
    }
})

export const selectError = (name) => (state) => state[slice.name].errors[name]
export const selectValue = (name) => (state) => state[slice.name].values[name]
export const selectAllValues = (state) => state[slice.name].values
export const selectSubmitted = (state) => state[slice.name].submitted
export const { changeValue, resetError, handleSubmit, addErrors, resetSubmit } =
    slice.actions
ReducerRegister.register(slice.name, slice.reducer)
