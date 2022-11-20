import React from 'react'
import PropTypes from 'prop-types'
import {NavLink ,Link } from "react-router-dom";


export default function Navbar(props) {
  let mystyle = {
    color : props.mode === "light" ? "black" : "white",
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} style=${mystyle}` }>
  <div className="container-fluid" >
    <Link className={`navbar-brand ${props.color} ` } to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className={`nav-link active ${props.color} aria-current="page`} to="/About">{props.Home}</NavLink>
        </li>
      
        <li className="nav-item">
        <NavLink className={`nav-link ${props.color}`} to="/contact">Contact Us</NavLink>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-primary ${props.color}`} type="submit">Search</button>
      </form>
    </div>
  </div>
  <div className={`form-check form-switch ${props.color}`}>
  <input onClick={props.toglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.text}</label>
</div>

</nav>

  )
}
Navbar.propTypes = {title : PropTypes.string, 
Home: PropTypes.string}

