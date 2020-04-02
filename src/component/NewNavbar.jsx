//test push
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import React, { Component } from "react";

class NavbarPage extends Component {
    render() {
        return (
            <div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }

}

export default NavbarPage;