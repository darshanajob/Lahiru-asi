import { ToastContainer, toast } from 'react-toastify';
import { NavBar } from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { AddContent } from "./components/AddContent";
import EditContent from "./components/EditContent";
const App = () =>  {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar/>
      <Switch>
        <Route exact path='/' component={ ()=> <Home/>}/>  
        <Route exact path='/add'>  
          <AddContent/>
        </Route>
        <Route exact path='/edit/:id'>  
          <EditContent/>
        </Route>
         
      </Switch>
    </div>
  );
}

export default App;
