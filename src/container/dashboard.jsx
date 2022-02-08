import Menubar from "../components/menubar";
import Navbar from "../components/navbar";
import { useSelector} from "react-redux";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "../views/home";
export default function Dashboard(){
    const toggle = useSelector(state => state.toggle)
    const theme = useSelector(state=>state.theme)
   
    return (
            <div>
                <Navbar/>
                <div className="">
                    <div className={theme?"menubackground":"menutheme"}>
                        <Menubar/>
                    </div>
                    <div className={toggle?"overflow":"overflow-2"}>    
                        <div className={theme?"view-body":"view-body2"}>
                            <Home/>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="copyright">
                        <span>Copyright © Designed &amp; Developed by <Link to="" >DexignZone</Link> 2021</span>
                    </div>
                </div>
            </div>
    );
}