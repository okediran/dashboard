import React from 'react';
import {Link} from "react-router-dom";
import { Avatar } from 'antd';
import { useState } from "react";
import tel1 from "../../asset/users/te1.jpg";
import { SearchOutlined,LogoutOutlined   } from '@ant-design/icons';
import {  faUserAlt,faUserCheck,faLifeRing} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    const [change,setchange] = useState(true)
    return (
        <header className='container-fluid' style={{padding:"10px 50px"}}>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <div className='d-flex' style={{gap:"20px"}}>
                        <Link className="navbar-brand" to="/dashboard">FIDELPAD</Link>
                        <p className="Fidepad" to="/">Fidepad School Managment System</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <form className='d-flex'>
                        <div className='search'>
                            <SearchOutlined  className='svg'/>
                            <input type="text" placeholder='search here...'/>
                        </div>
                        <ul className="d-flex" onClick={()=>setchange(!change)}>
                            <li><Avatar size={54} src={tel1} />
                                <ul className={change ? "hide ext" : "show"}>
                                   <h6 className=' dropdown-header noti-title'>welcome !</h6> 
                                   <li className="dropdown-item notify-item"><FontAwesomeIcon className="svg" icon={ faUserAlt } /> My account</li> 
                                   <li className="dropdown-item notify-item"><FontAwesomeIcon className="svg" icon={ faUserCheck } />Setting</li>
                                   <li className="dropdown-item notify-item"><FontAwesomeIcon className="svg" icon={ faLifeRing } />Support</li>
                                   <li className="dropdown-item notify-item"><LogoutOutlined />Logout</li>
                                </ul>
                            </li>
                            <li className="account-user-avatar">
                                <span className={change ?"span" : "change"}>John Doe</span> <br />
                                <span className={change ?"span" : "change"}>Superadmin</span>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;