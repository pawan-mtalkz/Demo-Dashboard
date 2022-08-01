import React,{useState} from 'react'
import data from '../Data/data.json'


const UserList = () => {
   
   const [userData,setUserData]= useState(data);

   console.log(userData);

  return (
    <>
  <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Id</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Email</th>
                                 <th scope="col">Organization id</th>
                                 <th scope="col">Action</th>
                                
                                
                              </tr>
                           </thead>
                           <tbody>
                           {data.users.map((item, index) => (
           
                              <tr>
                                 <th scope="row">{item.id}</th>
                                 <td>{item.name}</td>
                                 <td>{item.email}</td>
                                 <td>{item.organization_id}</td>
                                 <td><button type="button" class="btn btn-success"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                                
                              </tr>
          ))}
                         
                              
                            
                           </tbody>
                        </table>

   </>
  )
}

export default UserList
