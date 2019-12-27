import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import UsersList from "./components/users-list.component";
import CreateUser from "./components/create-user-.component";
import EditUser from "./components/edit-user.component";

function App() {
  return (
    <Router>
        <div className="container">
        <Navbar/>
        </div>
        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/edit/:id" exact component={EditUser}/>
        <Route path="/create" exact component={CreateUser}/>
    </Router>

  );
}

export default App;
