import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../../component/header_component/Header";
import Sidebar from "../../component/sidebar/sidebar";
import ScrollToBottom from "react-scroll-to-bottom";
import Footer from "../../component/footer/Footer";
function Index() {
    
    return (
        <section id="Home" style={{color:"#636c73"}}>
            <Header/>
            <div style={{overflow:"hidden"}}>
                <div className='row'>
                    <div className='col-lg-2' style={{width:"24rem"}}>
                        <ScrollToBottom>
                            <Sidebar/>
                        </ScrollToBottom>
                    </div>
                    <div className='col-lg-10' style={{padding:"30px 50px 20px 10px",background:"#fafbfe",width:"80%"}}>
                        <div className='container-fluid'>
                            <Outlet/>
                        </div>
                     <Footer/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;