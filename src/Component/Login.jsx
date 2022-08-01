import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
// import { useCookies } from "react-cookie";
// import Cookies from 'universal-cookie';
import Cookies from "js-cookie";



const Login = () => {

  const navigate = useNavigate();

// cookie.save('csrftoken', csrfToken);
// const cookies = new Cookies();
// username: cookies.get('username')
// Token request

// Cookies.get('XSRF-TOKEN');

Cookies.set('amit', 'ux', { expires: 7 })
console.log(Cookies.get('amit'))

  axios({
    url: 'http://api-server.mtalkz.com/sanctum/csrf-cookie',
    method: 'get',
    headers: {
       'Content-Type': 'application/json',
        Accept: "application/json",
      }
 })
 .then(response => {
  console.log(response.Cookies);
  let cookie = response.headers['XSRF-TOKEN']
 console.log('set-cookie header value', cookie)
 }) 
 
 .catch(err => {
    console.log(err);
 });


// login request


 axios.post('http://api-server.mtalkz.com/auth/login', {"email":"admin@mtalkz.com","password":"m2)A!2k2^a4M(n"}, {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    
  }
}
)









  



















function getData() {
    fetch("http://api-server.mtalkz.com/organizations", {
      method: "GET",
   
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  getData();

  const [message, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
   

    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const loginData = {
      Username: data.get("username"),
      Password: data.get("password"),
    };

    if (loginData.Username && loginData.Password) {
      console.log(loginData);

      const getuserArr = localStorage.getItem("userslist");
      if(getuserArr && getuserArr.length){
        const userdata=JSON.parse(getuserArr);
        const userLogin = userdata.filter((el,k)=>{
          return el.Username === loginData.Username && el.Password === loginData.Password
        });
        if(userLogin.length === 0){
          alert("invalid details")
        }else{
        console.log("user login successfull");
        navigate('/dashboard');
        }
      }




      document.getElementById("login").reset();
      setError({
        status: true,
        msg: "",
        class: "",
      });
      
    } else {
      setError({
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
                <div class="d-flex justify-content-center py-4">
                   
                  <a
                    href="index.html"
                    class="logo d-flex align-items-center w-auto"
                  >
                     
                    <img src="assets/img/logo.png" alt="" /> 
                    <span class="d-none d-lg-block">Admin</span> 
                  </a>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p class="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>
                    <form
                      class="row g-3 needs-validation"
                      novalidate
                      onSubmit={handleSubmit}
                      id="login"
                    >
                      <div class="col-12">
                        <label for="yourUsername" class="form-label">
                          Username
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            @
                          </span> 
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            id="yourUsername"
                          />
                          <div class="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="yourPassword" class="form-label">
                          Password
                        </label> 
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          id="yourPassword"
                        />
                        <div class="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                           
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          /> 
                          <label class="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                         
                        <button class="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">
                          Don't have account? 
                          <Link to="/register">Create an account</Link>
                        </p>
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
  );
};

export default Login;
