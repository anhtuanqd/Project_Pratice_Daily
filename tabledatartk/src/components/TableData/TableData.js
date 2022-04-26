import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getData } from '../../Reducers/tableReducer'
import moment from 'moment'

const TableData = () => {
     const dispatch = useDispatch()
     const data = useSelector((state) => state.table.data)
     console.log(data)
     useEffect(() => {
          dispatch(getData())
     }, [])

     return (
          <div>
               <table border="1">
                    <thead>
                         <tr>
                              <th>Tên ứng viên</th>
                              <th>Số Hiệu</th>
                              <th>Số lần tham gia</th>
                              <th>Ngày tham gia</th>
                              <th>Ngày kết thúc</th>
                         </tr>
                    </thead>
                    <tbody>
                         {data.map((item, id) => {
                              return (
                                   <tr key={id}>
                                        <td>{item.name}</td>
                                        <td>{item.shares}</td>
                                        <td>{item.name}</td>
                                        <td>
                                             {moment(item.last_update).format(
                                                  'MM/DD/YYYY'
                                             )}
                                        </td>
                                        <td>
                                             {moment(
                                                  item.transaction_date
                                             ).format('MM/DD/YYYY')}
                                        </td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>
          </div>
     )
}

export default TableData
