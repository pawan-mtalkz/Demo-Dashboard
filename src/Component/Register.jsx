import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  

  const [message, setMessage] = useState({
    status: false,
    msg: "",
    type: "",
  });

  // getting the values of local storage
const getDatafromLS=()=>{
    const ldata = localStorage.getItem('userslist');
    if(ldata){
      return JSON.parse(ldata);
    }
    else{
      return []
    }
  }

  const[alldata,setallData] = useState(getDatafromLS());

useEffect(()=>{

    localStorage.setItem('userslist',JSON.stringify(alldata))

},[alldata])


  const handleSubmit = (e) => {
   
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  
    const registerData = {
        Name:data.get("name"),
      Username: data.get("username"),
      Email: data.get("email"),

      Password: data.get("password"),
    };

    if (registerData.Username && registerData.Password && registerData.Email && registerData.Password) {
      console.log(registerData);
      document.getElementById("register").reset();
      setMessage({
        status: true,
        msg: "Registration Successful",
        class: "alert-success",
      });
      setallData([...alldata,registerData]);
      
     
    } else {
        setMessage({
        status: true,
        msg: "All Field are Required",
        class: "alert-danger",
      });
    }
  };
  return (
    <>
      <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div class="d-flex justify-content-center py-4"> <a href="index.html" class="logo d-flex align-items-center w-auto"> <img src="assets/img/logo.png" alt=""/> <span class="d-none d-lg-block">Admin</span> </a></div>
                        <div class="card mb-3">
                           <div class="card-body">
                              <div class="pt-4 pb-2">
                                 <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                                 <p class="text-center small">Enter your personal details to create account</p>
                              </div>
                              
                              <form class="row g-3 needs-validation" id="register" onSubmit={handleSubmit}>
                                 <div class="col-12">
                                    <label for="yourName" class="form-label">Your Name</label> <input type="text" name="name" class="form-control" id="yourName" />
                                    <div class="invalid-feedback">Please, enter your name!</div>
                                 </div>
                                 <div class="col-12">
                                    <label for="yourEmail" class="form-label">Your Email</label> <input type="email" name="email" class="form-control" id="yourEmail" />
                                    <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                                 </div>
                                 <div class="col-12">
                                    <label for="yourUsername" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                       <span class="input-group-text" id="inputGroupPrepend">@</span> <input type="text" name="username" class="form-control" id="yourUsername" />
                                       <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                 </div>
                                 <div class="col-12">
                                    <label for="yourPassword" class="form-label">Password</label> <input type="password" name="password" class="form-control" id="yourPassword" />
                                    <div class="invalid-feedback">Please enter your password!</div>
                                 </div>
                                
                                 <div class="col-12"> <button class="btn btn-primary w-100" type="submit">Create Account</button></div>
                                 <div class="col-12">
                                    <p class="small mb-0">Already have an account? <Link to="/">Log in</Link></p>
                                 </div>
                              </form>
                              <div class={`alert , ${message.class}`} role="alert">
                      {message.msg}
                    </div>
                           </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </section>
         </div>
    </>
  )
}

export default Register
