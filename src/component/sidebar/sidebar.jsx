import React from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import SLUGS from "../../resources/slug";
import { AppstoreFilled,UserOutlined,RightOutlined } from '@ant-design/icons'
import {Collapse } from 'react-bootstrap'
function Sidebar() {

    const[Open,setOpen]=useState(false)

    return (
        <section id='Sidebar'>
            <div className='card'>
                <div className='card-body'>
                    <ul>
                        <li>
                            <NavLink to={SLUGS.dashboard} activeclassName="active"><li><AppstoreFilled /><span>Dashboard</span></li></NavLink>
                        </li>
                        <li>
                            <NavLink to={SLUGS.users}  activeclassName="active"  onClick={() =>setOpen(!Open)}>
                               <UserOutlined />
                                <span>Users</span> <RightOutlined className={Open?'svg-arrow-change':'svg-arrow'}/>
                            </NavLink>
                           
                            <Collapse in={Open}>
                                <ul>
                                    <li>
                                        <NavLink to={SLUGS.student_user} activeclassName="active">
                                            Students
                                        </NavLink> 
                                    </li>
                                </ul>
                            </Collapse>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
          
    );
}
  
export default Sidebar