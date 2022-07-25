import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Layout from './Component/AdminPanel/Layout';
import UserList from './Component/AdminPanel/CommonComponent/UserList';
import Listroles from './Component/AdminPanel/CommonComponent/Listroles';
import CreateNewRole from './Component/AdminPanel/CommonComponent/CreateNewRole';
import Alluser from './Component/AdminPanel/CommonComponent/Alluser';
import UpdateRoles from './Component/AdminPanel/CommonComponent/UpdateRoles';
import UserReg from './Component/AdminPanel/CommonComponent/UserReg';
import Organizations from './Component/AdminPanel/CommonComponent/Organizations';
import CreateNewOrganizations from './Component/AdminPanel/CommonComponent/CreateNewOrganizations';



function App() {
  return (
    <BrowserRouter>

  <Routes>
  <Route exact path="/" element={<Login/>} />
  <Route exact path="register" element={<Register/>} />
  <Route exact path="dashboard" element={<Layout/>} >
  <Route exact path="userslist" element={<UserList/>} />
  <Route exact path="user" element={<Alluser/>} />
  <Route exact path="list_roles" element={<Listroles/>} />
  <Route exact path="create_roles" element={<CreateNewRole/>} />
  <Route exact path="update_roles" element={<UpdateRoles/>} />
  <Route exact path="user_registration" element={<UserReg/>} />
  <Route exact path="organizations" element={<Organizations/>} />
  <Route exact path="Create_organizations" element={<CreateNewOrganizations/>} />
  

  </Route>
  

  
   </Routes>

     </BrowserRouter>
  );
}

export default App;
