import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ViewNews from './pages/ViewUser'

const RouteList = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/view-news' element={<ViewNews/>}></Route>

  </Routes>


    )
}

export default RouteList