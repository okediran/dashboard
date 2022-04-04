import React from 'react';
import useDocumentTitle from "../../resources/useDocumentTitle";
import Header from "../../component/header_component/header";
function Dashboard() {
    function Page(props) {
        const titlePrefix = 'Fidepad School Managment System'
        useDocumentTitle(`${props.title}${titlePrefix}`)
        return <h2>{props.content}</h2>
      };
    return (
        <section>
            <div style={{position:"absolute"}}>
                <Page title='Dashboard - ' />
            </div>
            <Header/>
            <div className='row'>
                <div className='col-lg-3'>

                </div>
            </div>
            
        </section>
    );
}

export default Dashboard;