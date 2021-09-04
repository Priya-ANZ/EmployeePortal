import React, { Component } from 'react';
import data from '../data.json';
import EmployeeList from './employeeList';
import SideBar from './sidebar';

class Home extends Component {
    state = { 
        departments : [],
        selectedDepartment : null,
        selectedEmployee : null,
        searchQuery : ""
     }
  
     componentDidMount() {
       
         this.setState({departments: data.departments})  
     }

     handleDepartmentChange = (department) =>{
         this.setState({selectedDepartment : department, searchQuery : ""})
    }

     
     handleSearchText = (searchQuery)=> {
         this.setState({searchQuery})
     }
   
    render() { 
        
        return ( 
            
           
            <div classes="main-content">
                <div className = "row">
                    <div data-testid ="sidebar" className ="col-3">
                        <SideBar   items = {this.state.departments} onParentChange={this.handleDepartmentChange}></SideBar>
                    </div>
                    <div data-testid ="employeeList" className ="col">
                        {this.state.selectedDepartment && <EmployeeList  department = {this.state.selectedDepartment} searchItem = {this.state.searchQuery} onSearchText ={this.handleSearchText} ></EmployeeList>} 
                    </div>  
                </div>
            </div>
         );
    }
}
 
export default Home ;