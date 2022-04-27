import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TableData from './components/TableData/TableData'
import { Provider } from 'react-redux'
import store from './Reducers/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar/NavBar'
import App from './App'
ReactDOM.render(
     <React.StrictMode>
          <Provider store={store}>
               <BrowserRouter>
                    <NavBar />
                    <Routes>
                         <Route path="/" element={<App />} />
                         <Route path="/table" element={<TableData />} />
                    </Routes>
               </BrowserRouter>
          </Provider>
     </React.StrictMode>,
     document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
