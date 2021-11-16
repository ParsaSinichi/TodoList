import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";

class Home extends React.Component {
  state={
    Users:[],
    
    }
       async componentDidMount(){
          const response= await axios.get('https://jsonplaceholder.typicode.com/users');
           console.log(response);
          this.setState({Users:response.data  });
        
        console.log( );

        }
        render() {
            return (
              <>
               
                <div className="row">
                 
                  {this.state.Users.map((user) => {
                       
                    return (
                      <div className="col-4 text-center p-5 text-center border ">
                        
                             
                            
                            
                            <td>Name : {user.name}   </td>
                            <br />
                            <td> Email : {user.email}</td>
                            
                         
                        
                      </div>
                    );
                  })}
                </div>
              </>
            );
          }

}
export default Home;