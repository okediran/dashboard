import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../resources/useDocumentTitle";
import * as Yup from "yup";
import SLUGS from "../resources/slug";

function Register() {

  //  title
  function Page(props) {
    const titlePrefix = 'Fidepad School Managment System'
    useDocumentTitle(`${props.title}${titlePrefix}`)
    return <h2>{props.content}</h2>
  };

  // navigation
  const navigate = useNavigate();

  // Form
  const {handleSubmit,handleChange,values,touched,errors} = useFormik({
    initialValues:{
      username:"",
      email:"",
      password:"",
      confirm_password:""
    },
    validationSchema:Yup.object({
      username: Yup.string().required("username is required"),
      email: Yup.string().required("Required"),
      password: Yup.string().min(8,'Login must be longer than 8 characters').required(""),
      confirm_password: Yup.string().required("Required")

    }),
    onSubmit:({username,email,password,confirm_password})=>{
      if (password===confirm_password) {
        navigate(SLUGS.succesful)
      }
    }
  });
  return (
    <section id="register">
      <div style={{position:"absolute"}}>
        <Page title='Register - ' />
      </div>
      <div className="register-background"></div>
      <div className="container">
        <div className="card">
          <div className='head-color'>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div className="mb-3">
                <div className='input-div'>
                  <FontAwesomeIcon icon={faUser} />
                  <input name="username" value={values.username} onChange={handleChange}  placeholder="Username" type="text" className="form-control input" /> 
                </div>
                  {touched.username && errors.username ? (
                  <div>{errors.username}</div>
                ):null}
              </div>
              <div className="mb-3">
                <div className='input-div'>
                  <FontAwesomeIcon  icon={faEnvelope}/>
                  <input name="email" value={values.email} onChange={handleChange} placeholder="Email" type="email" className="form-control input"/> 
                </div>
                {touched.email && errors.email ? (
                  <div>{errors.email}</div>
                ):null}
              </div>
              <div className="mb-3">
                <div className='input-div'>
                  <FontAwesomeIcon icon={faLock }/>
                  <input name="password" value={values.password} onChange={handleChange} placeholder="Password" type="password"className="form-control input" />
                </div>
                {touched.password && errors.password? (
                  <div>{errors.password}</div>
                ):null}
              </div>
              <div className="mb-3 ">
                <div className='input-div'>
                  <FontAwesomeIcon  icon={faLock }/>
                  <input name="confirm_password" value={values.confirm_password} onChange={handleChange} placeholder="confirm password" type="password" className="form-control input" /> 
                </div>
                {touched.confirm_password && errors.confirm_password ? (
                  <div>{errors.confirm_password}</div>
                ):null}
              </div>
              <div className="mb-3 input-div form-check">
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check- ml-5" htmlFor="exampleCheck1">Accept the terms and politicies</label>
              </div>
              <button type="submit" className="btn form-control">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
