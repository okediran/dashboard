import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import img from "../assets/image/logo-full.png";
import axios from "axios";
import env from 'react-dotenv';
 export default function  Register()  {

    const {handleSubmit,handleChange,values,touched,errors} = useFormik({
        initialValues:{
            fullname:"",
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Required"),
            email:  Yup.string().required("Required"),
            password: Yup.string().min(8,"password must be longer than 8 characters").required()
        }),
        onSubmit:({fullname,email,password})=>{
            axios.post(`${env.API_URL}register`, {
                fullname:fullname,
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
     <div className="Register">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className='d-grid gap-2'>
                                <div className='text-center mb-3'>
                                    <img className='justify-content-center' src={img} alt="logo"/>
                                </div>   
                                <h4 className='text-center mb-4'>Sign up your account</h4>
                                <div className="form-group">
                                    <label for="username">Fullname</label>
                                    <input type="text" name='fullname' onChange={handleChange} value={values.fullname} className="form-control" placeholder="Fullname"/>
                                    {touched.fullname && errors.fullname ? (
                                        <div>{errors.fullname}</div>
                                    ):null}
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" onChange={handleChange} value={values.email} name='email' placeholder="hello@example.com"/>
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
                                </div> <br/>
                                <button type="submit" className='btn-lg' >sign me up</button>
                                <p>Already have an account? <Link className="a" to="/">Sign up</Link></p>
                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
 
  