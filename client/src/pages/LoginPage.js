import Title from "../components/Title/Title";

import "../components/ContactUs/ContactForm/ContactForm.scss";

const LoginPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title="Login with existing account" />
          <div className="row" style={{ marginBottom: "40px" }}>
            <div className="col-10 col-md-9 mx-auto">
              <div className="contact-form">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form__form"
                >
                  <div
                    className="contact-form__input d-flex justify-content-center align-items-center"
                    style={{ margin: "5px" }}
                  >
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="email"
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
                  onSubmit={(e) => e.preventDefault()}
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
