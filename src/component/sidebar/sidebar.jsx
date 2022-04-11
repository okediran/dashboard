import React from 'react';
import { NavLink } from 'react-router-dom';
import SLUGS from "../../resources/slug";
import { AppstoreFilled } from '@ant-design/icons'
function Sidebar() {
    return (
        <section id='Sidebar'>
            <div className='card'>
                <div className='card-body'>
                    <ul>
                        <NavLink to={SLUGS.dashboard} className="active"><li><AppstoreFilled /><span>Dashboard</span></li></NavLink>
                    </ul>
                </div>
            </div>
        </section>
          
    );
}

export default Sidebar