import { Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import img from "../assets/image/logo-full.png";
 export default function  Forgetpass()  {
    return (
     <div className="Register Forgetpass">
        <div className="container">
            <div className="row justify-content-center align-item-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form className='d-grid gap-2'>
                                <div className='text-center mb-3'>
                                    <img className='justify-content-center ' src={img} alt="logo"/>
                                </div>   
                                <h4 className='text-center mb-4'>Forgot Password</h4>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" placeholder="hello@example.com"/>
                                </div>
                                 <br/>
                                <Button type="submit" className='btn-lg' >SUBMIT</Button>
                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
 
  