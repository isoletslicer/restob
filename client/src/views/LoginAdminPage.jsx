import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

// import ButtonSubmit from "../components/buttoncomponents/ButtonSubmit";
import { loginBosku } from "../store/actions/actionuser";

export default function LoginAdminPage() {
  // bikin dulu shorthand nya
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // bikin state login form
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    return <Navigate to="/" />;
  }

  // bikin login handler utk shorthand
  const loginHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };
  // bikin method login
  const loginMethod = (e) => {
    e.preventDefault();
    dispatch(loginBosku(loginForm))
      .then((res) => {
        if (!res.err) {
          Swal.fire({
            icon: "success",
            title: "Login berhasil",
            text: `hola salam jas tok, ${localStorage.getItem("usernameFind")}`,
          });
          navigate("/");
        } else {
          throw new Error(res.err);
        }
      })
      .catch((err) => {
        //console.log(err, `<< list eror ny`);
        Swal.fire({
          icon: "error",
          title: "Login error",
          text: err,
        });
      });
  };

  return (
    <section className="vh-100" id="login-admin-page-section">
      <div className="container py-5 vh-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong bg-dark" id="card-login-admin">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-2 pb-2 pb-md-0 mb-md-4 text-white">Login</h3>
                <form onSubmit={loginMethod}>
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <div className="form-outline">
                        <label
                          className="form-label text-white"
                          htmlFor="email"
                        >
                          Email :
                        </label>
                        <input
                          type="text"
                          onChange={loginHandler}
                          name="email"
                          value={loginForm.email}
                          className="form-control form-control-md"
                          placeholder="Enter your email..."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <label
                          className="form-label text-white"
                          htmlFor="password"
                        >
                          Password :
                        </label>
                        <input
                          type="password"
                          onChange={loginHandler}
                          name="password"
                          value={loginForm.password}
                          className="form-control form-control-md"
                          placeholder="Enter your password..."
                        />
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-info text-black">
                    <i className="bi bi-box-arrow-in-right me-2"></i>Log in
                  </button> */}
                  {/* <ButtonSubmit /> */}
                  <button type="submit" className="btn btn-success">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
