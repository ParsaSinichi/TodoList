import React, { Component, createRef } from 'react';
import { Ref } from 'react';
class Login extends React.Component {     
  email = createRef();
  password = createRef();
    render() { 
        return <>
       <form onSubmit={this.validate} >
       <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address : </label>
  <input ref={this.email}     type="email"  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Password : </label>
  <input  ref={this.password}   type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password "/>
</div>
<button      className="btn btn-primary">Login</button>

       </form>
        
        
        </>

    }
    validate = (e)=>{
      e.preventDefault();
console.log(this.email.current.value);
console.log(this.password.current.value)
    }
}
 
export default Login;