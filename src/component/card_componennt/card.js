import React from 'react';
import { UsergroupAddOutlined,LogoutOutlined } from '@ant-design/icons'

function Card(props) {
    return (
        <div className='col-lg-6'>
            <div className='card mt-9'>
                <div className='card-body'>
                <div className='d-flex text-2xl'>
                    <h5 style={{flex:"1"}}>  <UsergroupAddOutlined className='svg2' style={{fontSize:"30px"}}/> <span>{props.status}</span>  <LogoutOutlined style={{fontSize:"15px"}}/></h5>
                        <UsergroupAddOutlined className='svg' style={{fontSize:"30px"}}/>
                </div>
                <h3 className='text-2xl font-bold' style={{margin:"2rem 0",color:" #6c757d"}}>{props.amount}</h3>
                <p style={{fontSize:"20px"}}>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;