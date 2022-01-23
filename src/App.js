import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "antd/dist/antd";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Forgetpass from "./pages/forgetpassword";
function App() {
  return (
    <Router>
      <div className="App">     
        <Routes>
          <Route path='/' element={<Login/>} exact/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Forgetpass' element={<Forgetpass/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
