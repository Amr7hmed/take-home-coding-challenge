import React from 'react';
import logo from './Component/svg/shopee-seeklogo.com.svg';

function Navbar() {
    return (<nav className="navbar navbar-light bg-light px-3">
                <div  className="container">
                        <a className="navbar-brand">
                            <img src={logo}/>
                        </a>
                        <form className="form-inline">
                            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
                            Sign in 
                            </button>
                        </form>
                </div>
            </nav>)}

export default Navbar;
