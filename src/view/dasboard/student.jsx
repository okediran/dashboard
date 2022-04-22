import React from 'react';
import useDocumentTitle from "../../resources/useDocumentTitle";
import { UserOutlined } from '@ant-design/icons'
function Student() {
    function Page(props) {
        const titlePrefix = 'Fidepad School Managment System'
        useDocumentTitle(`${props.title}${titlePrefix}`)
        return <h2>{props.content}</h2>
      };

      
    return (
        <section id='dashboard'>
            <div style={{position:"absolute"}}>
                <Page title='Student - ' />
            </div>
            <div className='row head'>
                <div className='col-xl-12'>
                    <div className='card card1' style={{padding:"20px 20px"}}>
                        <div className='card-body text-3xl'>
                             <h4 className="page-title"><UserOutlined/> <span style={{color:" #6c757d"}}>Student</span></h4> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                
            </div>
        </section>
    );
}

export default Student;