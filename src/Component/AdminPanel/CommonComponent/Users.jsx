import React from 'react'

const Users = () => {

    const XSRF_TOKEN = new URL(
        "http://api-server.mtalkz.com/sanctum/csrf-cookie"
      );
    
      const headers = {
        "X-XSRF-TOKEN": "{XSRF_TOKEN}",
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    
      console.log(XSRF_TOKEN);
    
      function getData() {
        fetch("https://api.github.com/users", {
          method: "GET",
          headers,
        })
          .then((res) => res.json())
          .then((res) => console.log(res));
      }
    
      getData();
    


  return (
    <>
      
    </>
  )
}

export default Users
