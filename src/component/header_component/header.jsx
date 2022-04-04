import React from 'react';
import {Link} from "react-router-dom";
import { Avatar } from 'antd';
import tel1 from "../../asses/users/te1.jpg";
function Header() {
    return (
        <header className='container-fluid' style={{padding:"10px 50px"}}>
            <nav class="navbar navbar-expand-sm">
                <div class="container-fluid">
                    <div className='d-flex' style={{gap:"20px"}}>
                        <Link class="navbar-brand" to="/">FIDELPAD</Link>
                        <p class="Fidepad" to="/">Fidepad School Managment System</p>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div>
                            <input type="text" />
                        </div>
                    <form>
                        <ul class="d-flex">
                            <li><Avatar size={64} src={tel1} />
                                <ul>
                                </ul>
                            </li>
                            <li class="account-user-avatar">
                                <span class="account-user-name">John Doe</span> <br />
                                <span class="account-position">Superadmin</span>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;