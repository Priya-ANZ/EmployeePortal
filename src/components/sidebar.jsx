import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const SideBar = props => {
   const classes = useStyles();
    const { items, onParentChange} = props;
    const [departments, setDepartments] = useState([]);
    let history = useHistory();

   
    useEffect(()=>{
      items.forEach(item => {
          const newItem = {...item, active: false};
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

  const handleEmployeeChange = (item) =>{
    history.push({
      pathname: '/employee',
      state: item
    })
  }

    return(

          <List component="nav"  className={classes.root}>
                 {departments.map(item => (
                         <List key={`lst${item.departmentID}`}>
                         <ListItem key ={item.departmentID} button onClick ={() => handleChange(item)}>
                             <ListItemText className="font-text" primary ={item.departmentName}></ListItemText>
                             {item.active ? <ExpandLess /> : <ExpandMore/>}
                         </ListItem>
                         <Collapse key={item.departmentName} in={item.active} timeout="auto" unmountOnExit>
                     <List component="div" disablePadding>
                            {item.employees.map(employee => (
                             <ListItem button key={employee.id} className={classes.nested} onClick ={() => handleEmployeeChange(employee)}>
                                 <ListItemText className = "font-text" primary={employee.name} />
                         </ListItem>
                            ))}
                        </List>
                      </Collapse> 
                      </List>
                 ))}
           </List>

)
}
 
export default SideBar;