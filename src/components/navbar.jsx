import { Link} from "react-router-dom";
import {useState} from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import img from "../assets/image/logo-full.png";
export default function Navbar() {
    const [bar,setbar]=useState(true);

   const iconChange =()=>{
      setbar(!bar)
    }

    return (
         <div className="header">   
            <nav className="navbar nav1 navbar-expand-lg">
                <div className="container-fluid">
                    <div className="nav-header d-flex">
                        <Link to="" className="navbar-brand d-flex"><img className='justify-content-center' src={img} alt="logo"/>
                            {bar?<h3>ZENIX</h3>:null}
                        </Link>
                        <button className="btn" onClick={iconChange} type="button">
                            <span className={bar?"fa fa-align-right":"fa fa-arrow-right"}></span>
                        </button>
                    </div>
                    <form  className="d-flex bg-light">
                        <input className="form-control me-2 bg-light" type="search" placeholder="Search" aria-label="Search"/>
                        <i className="fa fa-search"></i>
                    </form>
                    <div id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-lg-0">
                            <li className="nav-item">
                                <Link to="" className="nav-link"><i className="fa fa-moon-o"></i></Link>
                            </li>
                            <li className="nav-item dropdown">
                               <Link to="" className="nav-link"><i className="fa fa-bell-o"></i></Link> 
                               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="" className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link to="" className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link to="" className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                               <Link to="" className="nav-link"><i className="fa fa-comment-o"></i></Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link"><i className="fa fa-gift"></i></Link>
                            </li>
                            <li className="nav-item li-last">
                                <Link to="" className="nav-link last "> 
                                <   Avatar className="avater" shape="square" size={44} icon={<UserOutlined />} />
                                    <div><span>Johndoe</span> <br/>
                                    <small>Super Admin</small></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <p className={bar?"navbar-brand brand2":"navbar-brand show"}  to="#">Dashboard</p>
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item btn-link">
                            <Link to="" className="btn">Today</Link> 
                        </li>
                        <li className="nav-item btn-link">
                            <Link to="" className="btn">Month</Link>
                       </li>
                            <li className="nav-item dropdown">         
                        </li>
                        <li className="nav-item btn-link">
                            <Link to="" className="btn ">Year</Link>
                        </li>
                    </ul>
                    </div>
            </nav>
        </div>
    );
}
    