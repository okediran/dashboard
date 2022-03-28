
function Register() {
  return (
    <section id="Register">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form action="">
              <h1>Register</h1>
              <div class="mb-3">
                <input placeholder="Username" type="text" class="form-control" required/>
              </div>
              <div class="mb-3">
                <input placeholder="Email" type="email" class="form-control" required/>
              </div>
              <div class="mb-3">
                <input placeholder="Password" type="password" class="form-control" required/>
              </div>
              <div class="mb-3">
                <input placeholder="Retype password" type="password" class="form-control" required/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input"/>
                <label class="form-check-label" for="exampleCheck1">Accept the terms and politicies</label>
              </div>
              <button type="submit"  class="btn btn-primary form-control">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
