import React, { Component } from 'react';
import {Link} from "react-router-dom";

const EmployeeCard = ({employee}) => {
    const {name, age, designation, email, phone } = employee
    return ( 
                      
    <div className="card my-5 w-10" >
      
            <div className="card-body">
                <h5 className="card-title font-text">{name}</h5>
                <p className="card-text">
                    <label className ="font-text">Age : {age}</label><br/>
                    <label className ="font-text">Designation : {designation}</label><br/>
                    <label className ="font-text">Email : {email}</label><br/>
                    <label className ="font-text">Phone : {phone}</label><br/>
                </p>
               <Link
               to ={{
                pathname: '/employee',
                state:  employee
              }}
              className="btn btn-primary">
              View Full Profile
            </Link>
            </div>
    </div>
    
     );
}
 
export default EmployeeCard;