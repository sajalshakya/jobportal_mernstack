import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to = "/" className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to = "/" className="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/employer-login"className="nav-link" >Employer Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/employer-signup"className="nav-link" >Employer Signup</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </p>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><p className="dropdown-item" >Action</p></li>
                        <li><p className="dropdown-item" >Another action</p></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><p className="dropdown-item" >Something else here</p></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <p className="nav-link disabled"  tabIndex="-1" aria-disabled="true">Disabled</p>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;