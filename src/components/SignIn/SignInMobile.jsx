import React from 'react';
import eye from "../../assets/images/icon/action/eye_outlined.svg";

import f_logo from "../../assets/images/icon/f_logo.svg";
import g_logo from "../../assets/images/icon/g_logo.svg";
import close from "../../assets/images/icon/mobileClose.svg";
import './SignIn.css';
const SignInMobile = ({ handleSingIn }) => {
  return (
    <div
      className="modal"
      id="modalBox3"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-xl d-md-none"
        style={{
          bottom: "0",
        }}
      >
        <div className="modal-content">
          <div className="modal-header p-0 border-0 mx-4 mt-4">
            <p className="h3 ">Sing In</p>
            <img
              className="color-black"
              // style={{
              //   position: "absolute",
              //   right: "0px",
              //   top: "0px",
              //   zIndex: "1000",
              // }}
              data-bs-dismiss="modal"
              aria-label="Close"
              src={close}
              alt=""
            />
          </div>
          <div class="modal-body">
            <section className="">
              <div className="container py-3 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form>
                      <div className="form-outline">
                        <input
                          type="email"
                          id="form1Example13"
                          placeholder="Email"
                          className="form-control form-control-lg  py-3 m-0 rounded-0 "
                        />
                      </div>

                      <div className="form-outline position-relative">
                        <input
                          type="password"
                          id="form1Example23"
                          placeholder="Password"
                          className="form-control form-control-lg py-3 m-0 rounded-0 mb-3"
                        />
                        <img
                          className=""
                          src={eye}
                          alt=""
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "25px",
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block w-50  rounded-pill py-2 my-3"
                          onClick={handleSingIn}
                        >
                          Sing In
                        </button>
                        <p
                          className="text-decoration-underline"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#modalBox4"
                        >
                          {" "}
                          or,create account
                        </p>
                      </div>

                      <a
                        className="btn  btn-lg  w-100 border py-3 my-2 h5 mt-3"
                        href="#!"
                        role="button"
                      >
                        <img
                          style={{ width: "20px", height: "25px" }}
                          src={f_logo}
                          alt=""
                        />{" "}
                        Continue with Facebook
                      </a>
                      <a
                        className="btn  btn-lg  w-100 border py-3 my-2 h5"
                        href="#!"
                        role="button"
                      >
                        <img
                          style={{ width: "20px", height: "25px" }}
                          src={g_logo}
                          alt=""
                        />
                        Continue with Google
                      </a>
                    </form>
                  </div>
                  <div className="col-md-8 col-lg-7 col-xl-6">
                    <p className="text-right d-flex justify-content-center h5 align-items-center mt-2">
                      {" "}
                      Forgot password?
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* <SignIn></SignIn> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInMobile;