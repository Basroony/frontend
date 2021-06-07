import React from 'react';
import {Link, useHistory} from "react-router-dom";

function Navbar({logo}){
    let history = useHistory();
    return (
        <nav className="navbar">
            <div className="nav">
                <Link to="/" className="nav-item nav-brand">Instagram</Link>
                <div className="nav-search">
                    <input type="search" className="search" placeholder="Search"/>
                </div>
                <div className="nav-actions">
                    <Link to="/" className="nav-item"><i className="fas fa-home"></i></Link>
                    <Link to="/" className="nav-item"><i className="far fa-heart"></i></Link>
                    <Link to="/" className="nav-item" title="Log Out" onClick={e => {
                        e.preventDefault();
                        if (window.confirm("Apaka anda yakin mau keluar ?")){
                            localStorage.removeItem('user');
                            history.push('/login');
                        }
                    }}><i className="fas fa-sign-out-alt"></i></Link>
                    <Link to="/" className="nav-item nav-profile"><img src={logo} alt="Logo Profile"/></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;