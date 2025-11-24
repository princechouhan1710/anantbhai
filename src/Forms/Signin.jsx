import React from 'react'
import { Link } from 'react-router-dom'
function Signin() {
  return (
    <div>
      <div className='d-flex m-auto justify-content-center p-4  '>
        <div className='w-50' >
            <img width={"100%"}  src="https://task-apps-client.vercel.app/assets/signup-CndSm3Na.png" alt="" style={{background:"#60a5fa" }} />
        </div>
        <div className='w-50 p-3 text-dark w-75 d-flex flex-column gap-5' style={{background:' #bdd6ff'}}>
            <h2 className='cblue' style={{fontFamily:"Pacifico"}}>Sign up</h2>
                <form>
                     <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input type="email" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your UserName'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control " id="exampleInputPassword1" placeholder='Enter your password'/>
  </div>
 <p>New User? <Link to='/Signin' className="bblue bg-transparent" >Signup</Link></p>
  <button type="submit" class="btn btn-primary">Sign up</button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Signin
