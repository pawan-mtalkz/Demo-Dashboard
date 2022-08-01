import React,{useState} from 'react'
import data from '../Data/data.json'

const Organizations = () => {

const [OrganizationsData,setOrganizationsData]= useState(data);

console.log(OrganizationsData);
  return (
    <>
  {
      


  }
    
      <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Id</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Email</th>
                                 <th scope="col">Phone</th>
                                 <th scope="col">Address</th>
                                
                              </tr>
                           </thead>
                           <tbody>
                           {data.data.map((item, index) => (
           
                              <tr>
                                 <th scope="row">{item.id}</th>
                                 <td>{item.name}</td>
                                 <td>{item.email}</td>
                                 <td>{item.phone}</td>
                                 <td>{item.address}</td>
                              </tr>
          ))}
                         
                              
                            
                           </tbody>
                        </table>
    </>
  )
}

export default Organizations
