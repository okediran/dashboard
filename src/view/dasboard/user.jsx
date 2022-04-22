import React from 'react';
import useDocumentTitle from "../../resources/useDocumentTitle";
import { AppstoreFilled,ArrowRightOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons'
import Card from "../../component/card_componennt/card";
import { Link } from 'react-router-dom';
import Schedulecard from "../../component/card_componennt/schedulecard";
import { LogoutOutlined } from '@ant-design/icons'
import Chart from "../../resources/chart";
function User() {
    function Page(props) {
        const titlePrefix = 'Fidepad School Managment System'
        useDocumentTitle(`${props.title}${titlePrefix}`)
        return <h2>{props.content}</h2>
      };

      
    return (
        <section id='dashboard'>
            <div style={{position:"absolute"}}>
                <Page title='User - ' />
            </div>
            <div className='row head'>
                <div className='col-xl-12'>
                    <div className='card card1' style={{padding:"20px 20px"}}>
                        <div className='card-body text-3xl'>
                             <h4 className="page-title"><AppstoreFilled/> <span style={{color:" #6c757d"}}>Dashboard</span></h4> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-12'>
                    <div className='row'>
                        <div className="col-xl-8">
                            <div className='row flex-row'>
                                <Card status="Students" amount="12" text="Total number of student"/>
                                <Card status="Teacher" amount="5" text="Total number of teacher"/>
                                <Card status="Staff" amount="6" text="Total number of staff"/>
                            </div>
                            <Chart/>
                        </div>
                        <div className="col-xl-4 mt-9">
                            <div className='card total py-4' style={{background:"#0acf97"}}>
                                <div className='card-body' style={{padding:"0 1rem"}}>
                                    <h4 className="header-title text-white text-2xl">Todays attendance</h4>
                                    <div className="text-center">
                                        <h3 className="font-weight-normal text-white  text-3xl">0</h3>
                                        <p className="text-light text-2xl">0 Students are attending today</p>
                                        <Link to="/" className="btn btn-outline-light btn-sm " style={{fontSize:"17px",marginTop:"20px",padding:"10px"}}>Go to attendance <ArrowRightOutlined/></Link>
                                    </div>
                                </div>
                            </div>
                            <div id="scheduleCard" className=' mt-9'>
                                <div className='d-flex'>
                                    <h1 style={{flex:"1",fontSize:"22px",fontWeight:"600",color:" #6c757d"}}>Upcoming Event</h1>
                                    <Link to=""><LogoutOutlined style={{fontSize:"15px"}}/></Link> 
                                </div>
                                < Schedulecard title="Christmas" datefrom="Wed, 25 Dec 2019" dateto="Wed, 25 Dec 2019"/>
                                < Schedulecard title="Crafts Day" datefrom="Mon, 06 Jan 2020" dateto="Mon, 06 Jan 2020"/>
                                < Schedulecard title="Sports Day" datefrom="Wed, 01 Jan 2020" dateto="Sun, 05 Jan 2020"/>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-20' >
                        <div className="col-xl-8 mt-7">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="header-title mb-4">Accounts of April <Link to="https://demo.creativeitem.com/ekattor/superadmin/invoice" style={{color: "#6c757d"}}><i class="mdi mdi-export"></i></Link></h4>
                                        <div id="basic-datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div class="row">
                                                <div class="col-sm-12 col-md-6">
                                                    <div class="dataTables_length" id="basic-datatable_length">
                                                        <label className='d-flex' style={{gap:"10px"}}>Show 
                                                            <select style={{width:"80px",outline:"none"}} name="basic-datatable_length" aria-controls="basic-datatable" class="custom-select custom-select-sm form-control form-control-sm">
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                            </select> entries
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <table id="basic-datatable" class="table table-striped dt-responsive nowrap dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="basic-datatable_info" style={{width: "100%", position: "relative"}}>
                                                        <thead>
                                                            <tr role="row">
                                                                <th class="sorting_asc" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"  aria-sort="ascending" aria-label="Child: activate to sort column descending">
                                                                    Child
                                                                </th>
                                                                <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"  aria-label="Class: activate to sort column ascending">
                                                                    Class
                                                                </th>
                                                                <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"  aria-label="Invoice title: activate to sort column ascending">
                                                                    Invoice title
                                                                </th>
                                                                <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1" ria-label="Total amount: activate to sort column ascending">
                                                                    Total amount
                                                                </th>
                                                                <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"  aria-label="Paid amount: activate to sort column ascending">
                                                                    Paid amount
                                                                </th>
                                                                <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"  aria-label="Status: activate to sort column ascending">
                                                                    Status
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="odd">
                                                                <td valign="top" colspan="6" class="dataTables_empty">No data available in table</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12 col-md-10">
                                                    <div class="dataTables_info" id="basic-datatable_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                                </div>
                                                <div class="col-sm-12 col-md-2">
                                                     <div class="dataTables_paginate paging_simple_numbers" id="basic-datatable_paginate">
                                                        <ul class="pagination pagination-rounded" style={{gap:"30px"}}>
                                                            <li class="" id="basic-datatable_previous">
                                                                <LeftOutlined />
                                                            </li>
                                                             <li class="" id="basic-datatable_next">
                                                                <RightOutlined />
                                                            </li>
                                                        </ul>
                                                   </div>
                                                 </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className='card mt-6 text-2xl font-semibold'>
                                    <div className='card-body'>
                                        <h5 class="header-title mb-3"> Expense of April <Link to="" style={{color: "#6c757d"}}></Link></h5>
                                        <table className='table table-striped table-centered table-bordered mb-0 table-responsive' style={{width:"100%",color:"#6c757d"}}>
                                            <thead>
                                                <tr>
                                                    <th style={{width:"60%"}}>Expense</th>
                                                    <th  style={{width:"40%"}}>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td >No data found</td>
                                                    <td >No data found</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default User;