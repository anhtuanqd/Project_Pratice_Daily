import { configureStore } from '@reduxjs/toolkit'
import TableReducer from './tableReducer'

const store = configureStore({
     reducer: {
          table: TableReducer
     }
})
export default store
