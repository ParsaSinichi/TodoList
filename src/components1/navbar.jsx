import  { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
    render() { 
        return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        <Link className="nav-link" to="/signup">Signup</Link>
      
         
      </div>
    </div>
  </div>
</nav>
        
        
        
        
        
        </>;
    }
}
 
export default Navbar ;