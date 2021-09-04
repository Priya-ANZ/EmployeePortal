import EmployeeCard from "./employeeCard";
import SearchBox from "./searchbox";
import React, { useState } from 'react';


const EmployeeList = ({department, searchItem, onSearchText}) => {
    const[selectedEmployees, setSelectedEmployees] = useState([]);

           
    const handleTextChange = (value) =>{
        let newEmployeeList = [];
        department.employees.forEach(employee => {
           if(employee.name.toLowerCase().includes(value.toLowerCase()))
            {  
                newEmployeeList = [...newEmployeeList, {...employee}];
                
            }
        })
            setSelectedEmployees([...newEmployeeList])
            onSearchText(value)
          
    }

   return ( 
        <>
        <h2 className="font-text-bold">Department Name : {department.departmentName}</h2><br/>
        <ul className='nav nav-tabs sticky-top'>
        <li className="nav-item ">
        <SearchBox value ={searchItem} onChange = {handleTextChange}></SearchBox>
        </li>
        </ul><br/>

        
               
        <div className = "card-column my-5">
                {searchItem == '' && department.employees.map(employee => (
                    <EmployeeCard key={employee.id} id={employee.id} employee ={employee}></EmployeeCard>
                ))}
                {searchItem != '' && selectedEmployees.map(employee => (
                    <EmployeeCard key={employee.id} id={employee.id} employee ={employee}></EmployeeCard>
                ))}
         </div>
        </>
     );
}
 
export default EmployeeList;