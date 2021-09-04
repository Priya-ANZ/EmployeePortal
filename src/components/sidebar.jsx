import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const SideBar = props => {
    const { items, onParentChange} = props;
    const [departments, setDepartments] = useState([]);

   
    useEffect(()=>{
      items.forEach(item => {
          const newItem = {...item, active: false};
          console.log("newItem", newItem)
          setDepartments(prevDepartments => [...prevDepartments,{...newItem }]);
          })
    },[items])

  const handleChange =(item) =>{
      const items = [...departments];
      const index = items.indexOf(item)
      items[index] = {...item}
      items[index].active = !items[index].active
      setDepartments([...items]) 
      onParentChange(item);
  }

    return(
        <div className="accordion">
          <h4 className= "font-text">Departments</h4><br/>
        <div className="accordion-item">
         {departments.map(item => (
             <div key = {item.departmentID}>
            <div
            className="accordion-title"
            onClick={() => handleChange(item)}
        >
            <div><label  className="font-text">{item.departmentName}</label></div>
            <div>{item.active ? '-' : '+'}</div>
        </div>
        
    
         {item.active && item.employees.map(child => (
            <div key = {child.id} className="accordion-content">
                <li >
                  <Link  
                      to ={{
                            pathname: '/employee',
                            state:  child
                          }}
              >{child.name}</Link>
                  </li>
            </div>
         )) }
         </div>
         ))}   
         
  </div>
</div>)
}
 
export default SideBar;