import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Employee extends Component {
      
    render() { 
        const {id,name, designation, email, phone , url} = this.props.location.state
        return (  
            <div className="container my-5">
           
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={url} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h2 className="font-text">
                                      {name}
                                    </h2><br/>
                                    <h4 className="font-text">
                                       {designation}
                                    </h4><br/>
                                    
                                    <ul className="nav nav-tabs " id="myTab" role="tablist">
                                        <li className="nav-item ">
                                            
                                        </li>
                                
                            </ul>                         
                        </div>
                    </div>
                  
                </div>
                <div className="row">
                    <div className="col-md-4">
                       
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="font-text-bold">User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                            <label className="font-text">{id}</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <label className="font-text-bold">Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="font-text">{name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <label className="font-text-bold">Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="font-text">{email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <label className="font-text-bold">Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="font-text">{phone}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <label className="font-text-bold">Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="font-text">{designation}</p>
                                            </div>
                                        </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className = "col-6">
                    <Link to = "/" className="btn btn-primary">
                    Back to Dashboard
                    </Link> 
                    </div>
                   
                </div>
                    
        </div>
        );
    }
}
 
export default Employee;

