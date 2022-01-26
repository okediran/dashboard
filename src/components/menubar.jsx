import img from "../assets/image/Untitled-1.jpg";
import { Link, NavLink} from "react-router-dom";
import {useState} from 'react';
import { Collapse } from 'react-bootstrap';
export default function Menubar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="Menubar">
            <div className="main-profile">
                <div className="image">
                    <img src={img} alt="" />
                    <Link className="user-link" to=""><i class="fa fa-cog"></i></Link>
                </div>
                <h5>
                    <span className="font-w400">Hello,</span>
                    "Marquenz"
                </h5>
                <p>marquezzzz@mail.com</p>
            </div>
            <div className="metismenu mm-show">
                <ul>
                    <li className="menubar-li-1">MAIN MENU</li>
                    <li className="menubar-li-2"
                          aria-controls="example-collapse-text"
                          aria-expanded={open}>
                        <i className="fa fa-th"></i>
                        <span  onClick={() => setOpen(!open)}>Dashboard
                        <i className={open?"fa fa-angle-right fa-change":"fa fa-angle-right "}></i>
                        </span>
                        
                        <Collapse in={open}>
                            <div className="example-collapse-text">
                                 <ul>
                                    <li>
                                       <NavLink className='manulink active' activeClassName="activeRoute" to="">Dashbaord Light</NavLink> 
                                    </li>
                                    <li>
                                       <NavLink className='manulink' activeClassName="activeRoute" to="">Dashboard Dark</NavLink> 
                                    </li>
                                    <li>
                                       <NavLink className='manulink' activeClassName="activeRoute" to="">Wallet</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='manulink' activeClassName="activeRoute" to="">Transactions</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='manulink' activeClassName="activeRoute" to="">Coin Details</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='manulink' activeClassName="activeRoute" to="">portofolio</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='manulink'  activeClassName="activeRoute" to="">Market Capital</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                    </li>

                </ul>
           </div>
        </div>
    );
}