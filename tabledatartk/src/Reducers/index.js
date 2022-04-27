import { configureStore } from '@reduxjs/toolkit'
import TableReducer from '../components/TableData/tableReducer'

const store = configureStore({
     reducer: {
          table: TableReducer
     }
})
export default store
