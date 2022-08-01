import React from 'react'
import { Link } from 'react-router-dom'


const SideNav = () => {
  return (
    <>
       <aside id="sidebar" className="sidebar">
         <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item"> <a className="nav-link " href="index.html"> <i className="bi bi-grid"></i> <span>Dashboard</span> </a></li>
            <li className="nav-item">
               <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#"> <i className="bi bi-menu-button-wide"></i><span>Role Management</span><i className="bi bi-chevron-down ms-auto"></i> </a>
               <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
               <li> <Link to="create_roles"> <i className="bi bi-circle"></i><span>Create a New Role</span> </Link></li>

                  <li> <Link to="list_roles"> <i className="bi bi-circle"></i><span>List all Roles</span> </Link></li>
                 
                  <li> <Link to="update_roles"> <i className="bi bi-circle"></i><span>Update a role</span> </Link></li>

                 
               </ul>
            </li>
            <li className="nav-item">
               <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#"> <i className="bi bi-journal-text"></i><span>User Management</span><i className="bi bi-chevron-down ms-auto"></i> </a>
               <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li> <Link to="user_registration"> <i className="bi bi-circle"></i><span>User Registration</span> </Link></li>
                  <li> <Link to="userlist"> <i className="bi bi-circle"></i><span>Users</span> </Link></li>

               
               </ul>
            </li>
            <li className="nav-item">
               <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#"> <i className="bi bi-layout-text-window-reverse"></i><span>Organizations Management</span><i className="bi bi-chevron-down ms-auto"></i> </a>
               <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li> <Link to="organizations"> <i className="bi bi-circle"></i><span>List All Organizations</span> </Link></li>
                  <li> <Link to="create_organizations"> <i className="bi bi-circle"></i><span>Create a new Organizations</span> </Link></li>
                  
               </ul>
            </li>
           
         
  
       
            <li className="nav-item"> <Link  className="nav-link collapsed" to="user"> <i className="bi bi-file-earmark"></i> <span>Users List</span> </Link></li>
       
         </ul>
      </aside>
    </>
  )
}

export default SideNav
