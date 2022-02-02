import Menubar from "../components/menubar";
import Navbar from "../components/navbar";
import { useSelector} from "react-redux";
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
                            {/* Dashboard routes goes here */}
                                sorry <br/>
                                ekrghoirhot<br/>
                                kegoierngtorg<br/>
                                rgoirenh<br/>
                        </div>
                    </div>
                </div>
            </div>
    );
}