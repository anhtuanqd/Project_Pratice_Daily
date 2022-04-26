import { createSlice } from '@reduxjs/toolkit';

const tableReducer = createSlice({
    name: 'tableReducer',
    initialState: {
        data: [],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        }
    }
})

const { actions, reducer} = tableReducer;
export const { setData } = actions;
export default reducer;