import Menubar from "../components/menubar";
import Navbar from "../components/navbar";
// import {useState} from 'react';
export default function Dashboard(){
    // const [toggle, settoggle] = useState(true)
    return (
        <div>
            <Navbar/>
            <div className="">
                <div className="">
                    <Menubar/>
                </div>
                <div className="overflow">    
                    <div className="view-body">
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