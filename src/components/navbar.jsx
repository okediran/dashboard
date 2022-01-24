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
            <nav class="navbar nav1 navbar-expand-lg">
                <div class="container-fluid">
                    <div className="nav-header d-flex">
                        <Link to="" class="navbar-brand d-flex"><img className='justify-content-center' src={img} alt="logo"/>{bar?<h3>ZENIX</h3>:null}</Link>
                        <button class="btn" onClick={iconChange} type="button">
                            <span class={bar?"fa fa-bars":"fa fa-arrow-right"}></span>
                        </button>
                    </div>
                    <form  class="d-flex bg-light">
                        <input class="form-control me-2 bg-light" type="search" placeholder="Search" aria-label="Search"/>
                        <i className="fa fa-search"></i>
                    </form>
                    <div id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-lg-0">
                            <li class="nav-item">
                                <Link to="" className="nav-link"><i className="fa fa-moon-o"></i></Link>
                            </li>
                            <li class="nav-item dropdown">
                               <Link to="" className="nav-link"><i className="fa fa-bell-o"></i></Link> 
                               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="#">Action</Link></li>
                                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link class="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                               <Link to="" className="nav-link"><i className="fa fa-comment-o"></i></Link> 
                            </li>
                            <li class="nav-item">
                                <Link to="" className="nav-link"><i className="fa fa-gift"></i></Link>
                            </li>
                            <li class="nav-item li-last">
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
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <p class="navbar-brand" to="#">Dashboard</p>
                    <ul class="navbar-nav mb-lg-0">
                        <li class="nav-item btn-link">
                            <Link to="" class="btn">Today</Link> 
                        </li>
                        <li class="nav-item btn-link">
                            <Link to="" class="btn">Month</Link>
                       </li>
                            <li class="nav-item dropdown">         
                        </li>
                        <li class="nav-item btn-link">
                            <Link to="" class="btn ">Year</Link>
                        </li>
                    </ul>
                    </div>
            </nav>
        </div>
    );
}
    