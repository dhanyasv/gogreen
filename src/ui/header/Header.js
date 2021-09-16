import React, { useContext, useEffect, useState } from 'react'
import './Header.css';
import { AuthContext } from '../../App';
import {
    Link
  } from "react-router-dom";

function Header(props) {
    const auth = useContext(AuthContext);
    const [userAuth,setUserAuth] = useState(auth)
    const logout = () => {
        setUserAuth(false)
        
    }
    useEffect(() => {
        setUserAuth(auth)
        
    },[auth])
    return (
        <>
          <div className="navbar">
                <div className="navbar-logo">
                        Logo
                    </div>
                    <div className="navbar-menu">
                        <ul className="navbar-links">
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                            <Link to="/topic">Topics</Link>
                            </li>
                           {userAuth  && <li>
                                <a href="#" onClick={logout}>Logout</a>
                            </li>
                        }
                        </ul>
                </div>
           </div>
           {props.children}
        </>
    )
}

export default Header
