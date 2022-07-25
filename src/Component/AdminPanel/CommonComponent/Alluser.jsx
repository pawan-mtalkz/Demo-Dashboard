import React,{useEffect,useState} from 'react'


const Alluser = () => {

   const[users,setUsers]= useState([])

    const XSRF_TOKEN = new URL(
        "http://api-server.mtalkz.com/sanctum/csrf-cookie"
      );
    
      const headers = {
        "X-XSRF-TOKEN": "{XSRF_TOKEN}",
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    
      console.log(XSRF_TOKEN);
    
    //   function getData() {
    //     fetch("https://api.github.com/users", {
    //       method: "GET",
    //     //   headers,
    //     })
    //       .then((res) => res.json())
    //       .then((res) => console.log(res));
    //   }

const getUsers = async()=>{
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
}

    useEffect(() =>{
        getUsers();
    },[])
      
  return (
    <><div className='row'>
      {
        users.map((curElem)=>{
return(


<div className='col-lg-4'>
<div class="card">
  <img class="card-img-top" src={curElem.avatar_url} alt="image" />
  <div class="card-body">
    <h4 class="card-title">{curElem.login}</h4>
    
  </div>
</div>
    
</div>





)


})
      }
      </div>
    </>
  )
}

export default Alluser
