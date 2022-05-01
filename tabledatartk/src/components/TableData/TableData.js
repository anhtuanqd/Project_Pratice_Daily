import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getData, getDataItems } from './tableSlice'
import GetData from '../../services/Services'
import ChildTable from './ChildTable'

const TableData = () => {
     const dispatch = useDispatch()
     const dataID = useSelector((state) => state.tableReducer.ids)
     console.log(dataID)
     useEffect(() => {
          dispatch(getDataItems())
     }, [])
     console.log('parent')
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
                         {dataID.map((item, index) => {
                              return <ChildTable id={item} key={index} />
                         })}
                    </tbody>
               </table>
          </div>
     )
}

export default TableData
