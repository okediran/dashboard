import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "antd/dist/antd";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Forgetpass from "./pages/forgetpassword";
import Dashboard from "./components/dashboard";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";
function App() {
  return (
    <Router>
      <div className="App">     
        <Routes>
          <Route path='/' element={<Login/>} exact/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgetpass' element={<Forgetpass/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
