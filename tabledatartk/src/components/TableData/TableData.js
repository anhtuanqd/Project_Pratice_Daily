import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getData } from './tableReducer'

import GetData from '../../services/Services'
import ChildTable from './ChildTable'

const TableData = () => {
     const dispatch = useDispatch()
     const data = useSelector((state) => state.table.data)
     const dataApi = GetData(
          'https://625ce68595cd5855d6178b7b.mockapi.io/dataset'
     )
     useEffect(() => {
          dispatch(getData(dataApi))
     }, [dataApi])
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
                         {data.map((item, index) => {
                              return (
                                   <ChildTable
                                        data={item}
                                        index={index}
                                        key={index}
                                   />
                              )
                         })}
                    </tbody>
               </table>
          </div>
     )
}

export default TableData
