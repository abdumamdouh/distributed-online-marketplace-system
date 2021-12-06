import Title from "../components/Title/Title";

import { useState } from "react";

import "../components/ContactUs/ContactForm/ContactForm.scss";

const LoginPage = () => {
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const [SignUpName, setSignUpName] = useState("");
  const [SignUpEmail, setSignUpEmail] = useState("");
  const [SignUpPassword, setSignUpPassword] = useState("");

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(LoginEmail, LoginPassword);
  };

  const handleSignUpForm = (e) => {
    e.preventDefault();
    console.log(SignUpName, SignUpEmail, SignUpPassword);
  };
  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title="Login with existing account" />
          <div className="row" style={{ marginBottom: "40px" }}>
            <div className="col-10 col-md-9 mx-auto">
              <div className="contact-form">
                <form onSubmit={handleLoginForm} className="contact-form__form">
                  <div
                    className="contact-form__input d-flex justify-content-center align-items-center"
                    style={{ margin: "5px" }}
                  >
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="Email"
                      value={LoginEmail}
                      onChange={(e) => {
                        setLoginEmail(e.target.value);
                        //console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    className="contact-form__input d-flex justify-content-center align-items-center"
                    style={{ margin: "5px" }}
                  >
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="Password"
                      value={LoginPassword}
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                        //console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div className="contact-form__message mt-4"></div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ "margin-left": "10px", alignItems: "center" }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>

          <Title title="Create a new Account" style={{ marginTop: "10px" }} />
          <div className="row">
            <div className="col-10 col-md-9 mx-auto">
              <div className="contact-form">
                <form
                  onSubmit={handleSignUpForm}
                  className="contact-form__form"
                >
                  <div
                    className="contact-form__input d-flex justify-content-center align-items-center"
                    style={{ margin: "5px" }}
                  >
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="Name"
                      value={SignUpName}
                      onChange={(e) => {
                        setSignUpName(e.target.value);
                        //console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    className="contact-form__input d-flex justify-content-center align-items-center"
                    style={{ margin: "5px" }}
                  >
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="Email"
                      value={SignUpEmail}
                      onChange={(e) => {
                        setSignUpEmail(e.target.value);
                        //console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    className="contact-form__input d-flex justify-content-center align-items-center"
                    style={{ margin: "5px" }}
                  >
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="Password"
                      value={SignUpPassword}
                      onChange={(e) => {
                        setSignUpPassword(e.target.value);
                        //console.log(e.target.value);
                      }}
                    />
                  </div>
                  <div className="contact-form__message mt-4"></div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ "margin-left": "10px" }}
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;