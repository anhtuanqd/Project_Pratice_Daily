import { configureStore, combineReducers } from '@reduxjs/toolkit'
import ReducersRegister from './Helpers/ReducerRegister'

const store = configureStore({
    reducer: {
        ...ReducersRegister.reducers
    }
})

ReducersRegister.setChangeListener((reducers) => {
    store.replaceReducer(
        combineReducers({
            ...reducers
        })
    )
})

export default store
