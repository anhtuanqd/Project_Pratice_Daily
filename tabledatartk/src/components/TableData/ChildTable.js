import React, { memo, useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { editData } from './tableReducer'

const ChildTable = (data) => {
     let dataItem = data.data
     const [name, setName] = useState('')
     const dispatch = useDispatch()
     return (
          <tr>
               <td>
                    {dataItem.name}
                    <input
                         type="text"
                         onChange={(e) => setName(e.target.value)}
                         value={name}
                    />
                    <button
                         onClick={() => {
                              dispatch(
                                   editData({ index: data.index, value: name })
                              )
                         }}
                    >
                         Save
                    </button>
               </td>
               <td>{dataItem.shares}</td>
               <td>{dataItem.name}</td>
               <td>{moment(dataItem.last_update).format('MM/DD/YYYY')}</td>
               <td>{moment(dataItem.transaction_date).format('MM/DD/YYYY')}</td>
          </tr>
     )
}

export default memo(ChildTable)
