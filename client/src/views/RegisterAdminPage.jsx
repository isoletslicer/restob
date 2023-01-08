// import ButtonSubmit from "../components/buttoncomponents/ButtonSubmit";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerBosku } from "../store/actions/actionuser";
import Swal from "sweetalert2";

export default function RegisterAdminPage() {
  // bikin dulu shorthand nya
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // bikin state register form
  const [registerForm, setregisterForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  // bikin register handler utk shorthand
  const registerHandler = (e) => {
    const { name, value } = e.target;
    setregisterForm({
      ...registerForm,
      [name]: value,
    });
  };
  // bikin method register
  const registerMethod = (e) => {
    e.preventDefault();
    // //console.log("masuk");
    dispatch(registerBosku(registerForm))
      .then((res) => {
        if (!res.err) {
          Swal.fire({
            icon: "success",
            title: "Register success",
          });
          navigate("/");
        } else throw new Error("Please check your input");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Register error",
          text: err,
        });
      });
  };

  return (
    <section className="vh-100" id="register-admin-page-section">
      <div className="container py-5 vh-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="card shadow-2-strong bg-dark"
              id="card-register-admin"
            >
              <div className="card-body p-3 p-md-2">
                <h3 className="mb-2 pb-2 pb-md-0 mb-md-4 text-white">
                  Register
                </h3>
                <form onSubmit={registerMethod}>
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <div className="form-outline">
                        <label
                          className="form-label text-white"
                          htmlFor="username"
                        >
                          Username :
                        </label>
                        <input
                          type="text"
                          onChange={registerHandler}
                          name="username"
                          value={registerForm.username}
                          className="form-control form-control-md"
                          placeholder="Enter your username..."
                        />
                      </div>
                    </div>
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
                          onChange={registerHandler}
                          name="email"
                          value={registerForm.email}
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
                          onChange={registerHandler}
                          name="password"
                          value={registerForm.password}
                          className="form-control form-control-md"
                          placeholder="Enter your password..."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-2">
                      <div className="form-outline">
                        <label
                          className="form-label text-white"
                          htmlFor="phoneNumber"
                        >
                          Phone Number :
                        </label>
                        <input
                          type="text"
                          onChange={registerHandler}
                          name="phoneNumber"
                          value={registerForm.phoneNumber}
                          className="form-control form-control-md"
                          placeholder="Enter your phone number..."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-2">
                      <div className="form-outline">
                        <label
                          className="form-label text-white"
                          htmlFor="address"
                        >
                          Address :
                        </label>
                        <textarea
                          onChange={registerHandler}
                          name="address"
                          value={registerForm.address}
                          className="form-control form-control-md"
                          placeholder="Enter your address..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-success">
                      SUBMIT
                    </button>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
