import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './CommonComponent/SideNav'
import Topbar from './CommonComponent/Topbar'
import UserList from './CommonComponent/UserList'



const Layout = () => {
  return (
    <>
    <Topbar/>
    <SideNav/>
    <main id="main" class="main">
    <Outlet/>
    </main> 
    </>
  )
}

export default Layout
