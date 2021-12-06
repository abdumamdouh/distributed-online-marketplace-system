import Title from "../components/Title/Title";

import "../components/ContactUs/ContactForm/ContactForm.scss";

const LoginPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title="Login" />
          <div className="row">
            <div className="col-10 col-md-9 mx-auto">
              <div className="contact-form">
                <h4 className="contact-form__title">Manage Inventory</h4>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form__form"
                >
                  <div className="contact-form__input d-flex justify-content-center align-items-center">
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="contact-form__input-field"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="contact-form__message mt-4">
                    <textarea
                      rows="10"
                      className="contact-form__message"
                      placeholder="description"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Add Item
                  </button>
                  <button
                    type="submit"
                    className="btn"
                    style={{ "margin-left": "10px" }}
                  >
                    View Inventory
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
