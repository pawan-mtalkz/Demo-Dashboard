import React from 'react'

const UserList = () => {
   
let RigisteredUser = localStorage.getItem('userslist');
console.log(RigisteredUser)
if(RigisteredUser && RigisteredUser.length){
    const Rigistereddata=JSON.parse(RigisteredUser);
    console.log(Rigistereddata);
}

  return (
    <>


       <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Position</th>
                                 <th scope="col">Age</th>
                                 <th scope="col">Start Date</th>
                              </tr>
                           </thead>
                           <tbody>
                           {
                           
                            RigisteredUser.map(pobj => (       
                                <tr>
                                 <th scope="row">1</th>
                                 <td>{pobj.Name}</td>
                                 <td>Designer</td>
                                 <td>28</td>
                                 <td>2016-05-25</td>
                              </tr>

                           ))}
                        
                           </tbody>
                        </table>
   </>
  )
}

export default UserList
