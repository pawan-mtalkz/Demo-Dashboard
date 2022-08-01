import React,{useState} from 'react'
import data from '../Data/data.json'

const Listroles = () => {

   const [userData,setUserData]= useState(data);
   console.log(userData);

  return (
    <>
   
     <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Id</th>
                                 <th scope="col">Organization id</th>
                                 <th scope="col">Description</th>
                             
                                 <th scope="col" className='action'>status</th>
                              
                                 
                                 
                           </tr>
                           </thead>
                           <tbody>
                           {data.roles.map((item, index) => (
           
                              <tr>
                                 <th scope="row">{item.id}</th>
                             
                                 <td>{item.organization_id}</td>
                                 <td>{item.description}</td>
                                
                                 <td><span class="badge bg-success">Approved</span></td>
                             

                                 
                                 
                              </tr>
          ))}
                         
                              
                            
                           </tbody>
                        </table>
    </>
  )
}

export default Listroles
