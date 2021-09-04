import './App.css';
import Header from './components/header';
import Home from './components/home';
import { Route, Switch, Redirect } from "react-router-dom";
import Employee from './components/employee';
function App() {
 
  return (
        <>
          <Header></Header>
          <main>
                <Switch>
                  <Route path="/employee" component={Employee}></Route>
                  <Route path = "/dashboard" component ={Home}></Route>
                  <Redirect from="/" exact to="/dashboard"></Redirect>
                  <Redirect to="/dashboard"></Redirect>
                </Switch>
          </main>
        </>
  );
}

export default App;
