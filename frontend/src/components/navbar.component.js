import React, {Component} from "react";
import { Link } from "react-router-dom";

export default function(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Home Page</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">
                            Users
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">
                            Create User
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}