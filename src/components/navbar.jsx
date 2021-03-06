import { Link } from "react-router-dom";
import {useState} from 'react';
import { Avatar,Badge } from 'antd';
import { UserOutlined,DashOutlined } from '@ant-design/icons';
import { Timeline,Tabs } from 'antd';
import { Collapse,Offcanvas,Button } from 'react-bootstrap';
import img2  from "../assets/image/1.jpg";
import img3  from "../assets/image/pic1.jpg";
import { useSelector,useDispatch } from "react-redux";
import { toggleChange,themeChange } from "../action/index";
export default function Navbar() {
    const [bell,setbell]=useState(false)
    const [timeline,settimeline]=useState(false)
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const dispatch = useDispatch();

    const theme = useSelector(state=>state.theme)
    const toggle = useSelector(state => state.toggle)

    const { TabPane } = Tabs;

    return (
         <div className={theme?"header":"headertheme"}>   
            <nav className="navbar nav1 navbar-expand-lg">
                <div className="container-fluid">
                    <div className="nav-header d-flex">
                        <Link to="" className="navbar-brand d-flex">
                            <svg className="logo-abbr" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					            <rect className="svg-logo-rect" width="50" height="50" rx="6" fill="#EB8153"></rect>
					            <path className="svg-logo-path" d="M17.5158 25.8619L19.8088 25.2475L14.8746 11.1774C14.5189 9.84988 15.8701 9.0998 16.8205 9.75055L33.0924 22.2055C33.7045 22.5589 33.8512 24.0717 32.6444 24.3951L30.3514 25.0095L35.2856 39.0796C35.6973 40.1334 34.4431 41.2455 33.3397 40.5064L17.0678 28.0515C16.2057 27.2477 16.5504 26.1205 17.5158 25.8619ZM18.685 14.2955L22.2224 24.6007L29.4633 22.6605L18.685 14.2955ZM31.4751 35.9615L27.8171 25.6886L20.5762 27.6288L31.4751 35.9615Z" fill="white"></path>
				            </svg>
                            {toggle?<h3>ZENIX</h3>:null}
                        </Link>
                        <button className={toggle?"btn btn-right":"btn btn-left"} onClick={() => dispatch(toggleChange())} type="button">
                            <span className={toggle?"fa fa-align-right":"fa fa-arrow-right"}></span>
                        </button>
                    </div>
                    <form  className={toggle?"d-flex bg-light":"d-flex  bg-light"}>
                        <input className="form-control me-2 bg-light" type="search" placeholder="Search" aria-label="Search"/>
                        <i className="fa fa-search"></i>
                    </form>
                    <div id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="" onClick={() => dispatch(themeChange())} className="nav-link"><i className={theme?"fa fa-moon-o":"fa fa-sun-o"}></i></Link>
                            </li>
                            <li onClick={() => settimeline(false)} className="nav-item dropdown bell"  aria-controls="example-collapse-text">
                               <Link to="" className="nav-link" onClick={() => setbell(!bell)}><i className="fa fa-bell-o"></i></Link> 
                               <Collapse className="c-bell" in={bell}>
                                    <div className="example-collapse-text">
                                        <li>
                                            <img src={img2} alt="god"/>
                                           <div className="profile-content">
                                                 <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                 <small className="d-block">29 July 2020 - 02:26 PM</small>
                                           </div>
                                        </li>
                                        <Link className="all-notification" to="">
                                            <small>See all notifications</small> <i className="fa fa-arrow-right"></i>
                                        </Link>
                                     </div>
                            </Collapse>
                            </li>
                            <li className="nav-item">
                               <Link to=""  onClick={() => setShow(!show)} className="nav-link"><i className="fa fa-comment-o"></i></Link> 
                               <Offcanvas className="offcanvas"  placement="end" show={show} onHide={() => setShow(false)}> 
                                    <ul className="tab-ul">
                                            <Tabs className="Tabs" defaultActiveKey="1">
                                                    <TabPane  className="TabPane" tab=" NOTES" key="1">
                                                        <div className="card  mb-sm-3 mb-md-0 note_card">
                                                            <div className="card-header card-head chat-list-header text-center">
                                                                    <i className="fa fa-plus"></i>
                                                                <div>
                                                                    <h6 className="mb-1">Notes</h6>
									                                <p className="mb-0">Add New Nots</p>
                                                                </div>
                                                                    <i className="fa fa-search search"></i>
                                                            </div>
                                                            <div className="card-body contacts_body p-0 dz-scroll ps">
                                                                <ul className="contacts">
                                                                    <li className="active">
                                                                        <div className="d-flex bd-highlight">
                                                                            <div className="user_info">
                                                                                <span>New order placed..</span>
                                                                                <p>10 Aug 2020</p>
                                                                            </div>
                                                                            <div className="ml-auto">
                                                                                <Button variant="secondary" size="sm">
                                                                                    <i className="fa fa-pencil"></i>
                                                                                </Button>
                                                                                <Button className="btn-danger" variant="danger" size="sm">
                                                                                     <i className="fa fa-trash"></i>
                                                                                 </Button>
											                                </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </TabPane>
                                                    <TabPane  className="TabPane" tab="ALERTS" key="2">
                                                        <div className="card  mb-sm-3 mb-md-0 note_card">
                                                                <div className="card-header card-head chat-list-header text-center">
                                                                        < DashOutlined className="fa fa-dot" />
                                                                    <div>
                                                                        <h6 className="mb-1">Notications</h6>
                                                                        <p className="mb-0">Show All</p>
                                                                    </div>
                                                                        <i className="fa fa-search search"></i>
                                                                </div>
                                                                <div className="card-body contacts_body p-0 dz-scroll ps">
                                                                    <ul className="contacts">
                                                                        <li className="active name-first-letter">SEVER STATUS</li>
                                                                        <li className="active">
                                                                            <div className="d-flex-2 bd-highlight">
                                                                                <div className="img_cont primary">
                                                                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', width: 35, height: 35 }}>KK</Avatar>
                                                                                </div>
                                                                                <div className="user_info">
                                                                                    <span>David Nester Birthday</span>
                                                                                    <p className="text-primary">Today</p>
											                                    </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="active name-first-letter">SOCIAL</li>
                                                                        <li className="active">
                                                                            <div className="d-flex-2 bd-highlight">
                                                                                <div className="img_cont primary">
                                                                                    <Avatar style={{ color: '#68CF29', backgroundColor: '#ecfae4', width: 35, height: 35 }}>RU</Avatar>
                                                                                </div>
                                                                                <div className="user_info">
                                                                                    <span>Perfection Simplified</span>
                                                                                    <p className="text-secondary">Jame Smith commented on your status</p>
											                                    </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                    </TabPane>
                                                    <TabPane  className="TabPane" tab=" CHART" key="3">
                                                        <div className="card  mb-sm-3 mb-md-0 note_card">
                                                            <div className="card-header card-head chat-list-header text-center">
                                                                    <i className="fa fa-plus"></i>
                                                                <div>
                                                                    <h6 className="mb-1">Notications</h6>
                                                                    <p className="mb-0">Show All</p>
                                                                </div>
                                                                    < DashOutlined className="fa fa-dot" />
                                                            </div>
                                                            <div className="card-body contacts_body p-0 dz-scroll ps">
                                                                <ul className="contacts">
                                                                    <li className="active name-first-letter">A</li>
                                                                    <li className="active">
                                                                        <div className="d-flex-2 bd-highlight">
                                                                            <div className="img_cont primary">
                                                                                <Badge dot  style={{ backgroundColor: '#52c41a' }} offset={[0, 28]}>
                                                                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', width: 35, height: 35 }}>KK</Avatar>
                                                                                </Badge>
                                                                            </div>
                                                                            <div className="user_info">
                                                                                <span>Archie Parker</span>
                                                                                <p className="text-secondary">Kalid is online</p>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="active name-first-letter">B</li>
                                                                    <li className="active">
                                                                        <div className="d-flex-2 bd-highlight">
                                                                            <div className="img_cont primary">
                                                                                <Badge dot offset={[0, 28]}>
                                                                                    <Avatar style={{ color: '#68CF29', backgroundColor: '#ecfae4', width: 35, height: 35 }}>RU</Avatar>
                                                                                </Badge>
                                                                            </div>
                                                                            <div className="user_info">
                                                                                <span>Alfie Mason</span>
                                                                                <p className="text-secondary">Taherah left 7 mins ago</p>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </TabPane>
                                            </Tabs>
                                        </ul>                                       
                                </Offcanvas>
                            </li>
                            <li className="nav-item" onClick={() => setbell(false)}>
                                <Link to="" className="nav-link"  onClick={() => settimeline(!timeline)}><i className="fa fa-gift"></i></Link>
                                <Collapse className="c-bell" in={timeline}> 
                                    <div className="timeline">
                                        <Timeline>
                                            <Timeline.Item color="orange">
                                                <span>10 minutes ago</span>
                                                <h6 className="mb-0">
                                                    Youtube, a video-sharing website, goes live 
                                                    <strong className="text-primary">$500</strong>
                                                </h6>
                                            </Timeline.Item>
                                            <Timeline.Item color="blue">
                                                <span>20 minutes ago</span>
                                                <h6 className="mb-0">
                                                    <strong className="text-info">#XF-2356.</strong>
                                                    <strong className="text-primary">$500</strong>
                                                </h6>
                                                <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                            </Timeline.Item>
                                            <Timeline.Item color="red">
                                                <span>30 minutes ago</span>
                                                <h6 className="mb-0">
                                                    Youtube, a video-sharing website, goes live 
                                                    <strong className="text-primary">$500</strong>
                                                </h6>
                                            </Timeline.Item>
                                        </Timeline>
                                    </div>
                                </Collapse>
                            </li>
                            <li className="nav-item li-last">
                                <Link to="" className="nav-link last" onClick={() => setProfile(!profile)}> 
                                <Avatar className="avater" src={img3} shape="square" size={35} icon={<UserOutlined />} />
                                    <div><span>Johndoe</span> <br/>
                                    <small>Super Admin</small></div>
                                </Link>
                                <Collapse className="" in={profile}>
                                    <div className="profile-toggle">
                                        <li>
                                            <Link to="" className="profile-link"><i className="fa fa-user-o"></i> Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="" className="profile-link"><i className="fa fa-envelope-o"></i> Inbox</Link>
                                        </li>   
                                        <li>
                                            <i className="fa fa-sign-out"></i> Logout
                                        </li>
                                     </div>
                            </Collapse>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light nav-2">
                <div className="container-fluid">
                    <p className={toggle?" brand2":" show"}  to="#">Dashboard</p>
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
    