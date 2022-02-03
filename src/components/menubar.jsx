import img from "../assets/image/Untitled-1.jpg";
import { Link, NavLink} from "react-router-dom";
import {useState} from 'react';
import { Collapse } from 'react-bootstrap';
import { useSelector} from "react-redux";
export default function Menubar() {
    const [open, setOpen] = useState(false);
    const toggle = useSelector(state => state.toggle);
    return (
        <div className={toggle ? "Menubar":"menushow"}>
           {toggle ? <div>
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
                            aria-controls="example-collapse-text">
                            <i className="fa fa-th"></i>
                            <span  onClick={() => setOpen(!open)}>Dashboard
                            <i className={open?"fa fa-angle-right fa-change":"fa fa-angle-right "}></i>
                            </span>
                            <Collapse in={open}>
                                <div className="example-collapse-text">
                                    <ul>
                                        <li>
                                        <NavLink className='manulink' activeclassName="activeRoute" to="">Wallet</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='manulink' activeclassName="activeRoute" to="">Transactions</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='manulink' activeclassName="activeRoute" to="">Coin Details</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='manulink' activeclassName="activeRoute" to="">portofolio</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='manulink'  activeclassName="activeRoute" to="">Market Capital</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </Collapse>
                        </li>
                    </ul>
                </div>
            </div>: 
            <div className="ul-fa-end">
                 <i className="fa fa-th menu-fa-end"></i>
                    <div className="ul">
                        <li>Wallet</li>
                        <li>Transactions</li>
                        <li>Coin Details</li>
                        <li>portofolio</li>
                        <li>Market Capital</li>
                    </div>
            </div>  }
        </div>
    );
}