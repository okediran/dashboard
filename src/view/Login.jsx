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
      email:"",
      password:""
    },
    validationSchema:Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().min(8,'Login must be longer than 8 characters').required(""),
    }),
    onSubmit:({email,password})=>{
        console.log(`email:${values.email},password:${values.password}`);
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
              <h1>Login</h1>
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
              <Link to="/succesful"><button type="submit"  class="btn btn-primary form-control">Sign in</button></Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
