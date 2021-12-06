import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../../redux/actions/products";
import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  return (
    <div className="contact-form">
      <h4 className="contact-form__title">Manage Inventory</h4>
      <form
        onSubmit={e => {
          e.preventDefault();
          const data = { name, price, description, title };
          dispatch(addProductAction(data));
        }}
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
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="title"
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
          Add Product To store
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
