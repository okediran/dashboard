import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import useDocumentTitle from "../resources/useDocumentTitle";
import * as Yup from "yup";
function Register() {

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
    onSubmit:({username,email,password,retype_password})=>{
      if (password===retype_password) {
          console.log(`username:${values.username},email:${values.email},password:${values.password},retype_password:${values.retype_password}`);
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
              <div class="mb-3">
                <FontAwesomeIcon className="svg" icon={faUser} />
                <input name="username" value={values.username} onChange={handleChange}  placeholder="Username" type="text" class="form-control" />
                {touched.username && errors.username ? (
                  <div>{errors.username}</div>
                ):null}
              </div>
              <div class="mb-3">
                <FontAwesomeIcon className="svg" icon={faEnvelope} />
                <input   name="email" value={values.email} onChange={handleChange} placeholder="Email" type="email" class="form-control" />
                {touched.email && errors.email ? (
                  <div>{errors.email}</div>
                ):null}
              </div>
              <div class="mb-3">
                <FontAwesomeIcon className="svg" icon={faLock } />
                <input   name="password" value={values.password} onChange={handleChange} placeholder="Password" type="password" class="form-control" />
                {touched.password && errors.password? (
                  <div>{errors.password}</div>
                ):null}
              </div>
              <div class="mb-3">
                <FontAwesomeIcon className="svg" icon={faLock } />
                <input    name="confirm_password" value={values.confirm_password} onChange={handleChange} placeholder="confirm password" type="password" class="form-control" />
                {touched.confirm_password && errors.confirm_password ? (
                  <div>{errors.confirm_password}</div>
                ):null}
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input"/>
                <label class="form-check-label" for="exampleCheck1">Accept the terms and politicies</label>
              </div>
              <Link to="/succesful"><button type="submit"  class="btn btn-primary form-control">Sign up</button></Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
