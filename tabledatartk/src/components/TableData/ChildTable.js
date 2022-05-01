import React, { memo, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { editData } from './tableSlice'

const ChildTable = ({ id }) => {
     const dispatch = useDispatch()
     const dataItems = useSelector((state) => state.tableReducer.data[id])
     console.log('children')
     const [name, setName] = useState('')
     return (
          <tr>
               <td>
                    {dataItems.name}
                    <input
                         type="text"
                         onChange={(e) => setName(e.target.value)}
                         value={name}
                    />
                    <button
                         onClick={() => {
                              dispatch(editData({ value: name, id: id }))
                         }}
                    >
                         Save
                    </button>
               </td>
               <td>{dataItems.shares}</td>
               <td>{dataItems.name}</td>
               <td>{moment(dataItems.last_update).format('MM/DD/YYYY')}</td>
               <td>
                    {moment(dataItems.transaction_date).format('MM/DD/YYYY')}
               </td>
          </tr>
     )
}

export default memo(ChildTable)
