import React from 'react'

const UpdateRoles = () => {
  return (
    <>
         <div class="pagetitle">
            <h1>Update Role</h1>
           
         </div>
    <section class="section contact">
      <form  class="php-email-form">
                        <div class="row gy-4">
                           <div class="col-md-6"> <input type="text" name="name" class="form-control" placeholder="Your Name" required=""/></div>
                           <div class="col-md-6 "> <input type="email" class="form-control" name="email" placeholder="Your Email" required=""/></div>
                           <div class="col-md-12"> <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/></div>
                           <div class="col-md-12"><textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea></div>
                           <div class="col-md-12">
                             
                              <button type="submit">Submit</button>
                           </div>
                        </div>
                     </form>
                     </section>
    </>
  )
}

export default UpdateRoles
