import { Link } from "react-router-dom";
import { useFormik } from "formik";
import env from 'react-dotenv';
import * as Yup from "yup";
import axios from "axios";
import img from "../assets/image/logo-full.png";
 export default function  Login()  {

    const {handleSubmit, handleChange,values,touched,errors} = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            email:  Yup.string().required("Required"),
            password: Yup.string().min(8,"password must be longer than 8 characters").required()
        }),
        onSubmit:  ({email,password})=>{
            axios.post(`${env.API_URL}login`,{
                    email:email,
                    password:password
                })
                .then( res =>{
                console.log(res.data)
                 })
                 .catch( err =>{
                console.log(err.data)
                })
        }
    })

    return (
     <div className="Register Login">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className='d-grid gap-2'>
                                <div className='text-center mb-3'>
                                    <img className='justify-content-center' src={img} alt="logo"/>
                                </div>   
                                <h4 className='text-center mb-4'>Sign in your account</h4>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" onChange={handleChange} value={values.email} name='email' className="form-control" placeholder="hello@example.com"/>
                                    {touched.email && errors.email ? (
                                        <div>{errors.email}</div>
                                    ):null}
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" name='password' onChange={handleChange} value={values.password} className="form-control" placeholder="password"/>
                                    {touched.password && errors.password ? (
                                        <div>{errors.password}</div>
                                    ):null}
                                </div> 
                                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className='form-group'>
                                      <input type="checkbox" className="custom-control-input" />
                                      <label for="password">Remember my preference</label>
                                    </div>
                                    <div className='form-group'>
                                        <div className="custom-control custom-checkbox ml-1">
                                            <label for="password"><Link className="link" to="/Forgetpass">Forgot Password?</Link></label>
                                        </div>
                                    </div>
                                </div> <br/>
                                <button type="submit" className='btn-lg' >sign me up</button>
                                <p>Already have an account? <Link className="a" to="/Register">Sign up</Link></p>
                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
 
  