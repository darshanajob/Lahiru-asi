
import React,{Component} from 'react';
import { Route } from 'react-router';
import './App.css';
import {Navbar} from './components/Navbar';


const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path='/'>  
        <h3> 1st level </h3>
        </Route>
        <Route exact path='/add'>  
        <h3> 2nd level </h3>
        </Route>
        <Route exact path='/edit/:id'>  
         <h3> 3rd level </h3>
        </Route>
         
      </Switch>
      <h1>Hi all </h1>
   
    </div>
  ); 
  
}

export default App;
