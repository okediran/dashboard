import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "antd/dist/antd";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Forgetpass from "./pages/forgetpassword";
import DashboardContainer from "./container/dashboard";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";
function App() {
  return (
    <Router>
      <div className="App">     
        <Routes>
          <Route path='/' element={<Login/>} exact/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgetpass' element={<Forgetpass/>}/>
          <Route path='/dashboard' element={<DashboardContainer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
