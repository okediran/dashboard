import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import useDocumentTitle from "../resources/useDocumentTitle";
import * as Yup from "yup";

function Login() {

  //  title
  function Page(props) {
    const titlePrefix = 'Fidepad School Managment System'
    useDocumentTitle(`${props.title}${titlePrefix}`)
    return <h2>{props.content}</h2>
  };

  // Form
  const {handleSubmit,handleChange,values,touched,errors} = useFormik({
    initialValues:{
      username:"",
      password:""
    },
    validationSchema:Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().min(8,'Login must be longer than 8 characters').required(""),
    }),
    onSubmit:({username,password})=>{
        console.log(`username:${values.username},password:${values.password}`);
    }
  });
  return (
    <section id="register">
      <div style={{position:"absolute"}}>
        <Page title='Login - ' />
      </div>
      <div className="register-background"></div>
      <div className="container">
        <div className="card">
          <div className='head-color head-login'>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1>LOGIN</h1>
              <p style={{fontSize:"22px"}}>Enter your username address and password to access account.</p>
              <div className="mb-3">
                <div className='input-div'>
                  <FontAwesomeIcon className="svg" icon={faEnvelope} />
                  <input name="username" value={values.username} onChange={handleChange} placeholder="Username" type="username" className="form-control input" />
                </div>
                {touched.username && errors.username ? (
                  <div>{errors.username}</div>
                ):null}
              </div>
              <div className="mb-3">
                <div className='input-div'>
                  <FontAwesomeIcon className="svg" icon={faLock } />
                  <input name="password" value={values.password} onChange={handleChange} placeholder="Password" type="password" className="form-control input" />
                </div>
                {touched.password && errors.password? (
                  <div>{errors.password}</div>
                ):null}
              </div>
              <Link to="/succesful"><button type="submit"  className="btn btn-primary form-control">Sign in</button></Link>
                <div class="form-group d-md-flex justify-between mt-4">
                  <div class="">
                      <input type="checkbox" className='form-check-input'/>Remember Me
                  </div>
                  <div class=" text-md-right">
                    <Link to="#" style={{color: "#fff"}}>Forgot Password</Link>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
