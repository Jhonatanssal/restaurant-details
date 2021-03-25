import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'images/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className="d-sm-flex align-items-center">
          <img id="logo" className="mr-2" src={logo} alt="Logo" />
          <a className="navbar-brand" href="/">Restaurant Details</a>
        </span>
        <span className="app-name">
          <Link to='/new-restaurant' className="btn btn-secondary btn-sm">New Restaurant</Link>
        </span>
      </div>
    </nav>
  )
}