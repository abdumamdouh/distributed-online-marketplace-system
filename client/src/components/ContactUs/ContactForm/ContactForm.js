import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductAction } from "../../../redux/actions/products";
import "./ContactForm.scss";

const ContactForm = () => {
  const { userInfo } = useSelector(state => state.user);
  const { user } = userInfo;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [seller, setSeller] = useState("")
  const dispatch = useDispatch();
  return (
    <div className="contact-form">
      <h4 className="contact-form__title">Manage Inventory</h4>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSeller(user.name)
          const data = {seller, name, price, description, title, imageUrl };
          dispatch(addProductAction(data));
        }}
        className="contact-form__form"
      >
        <div className="contact-form__input d-flex justify-content-center align-items-center">
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="Name"
            onChange = {(e) => setName(e.target.value)}
          />
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="contact-form__message mt-4">
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="contact-form__message mt-4">
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="image URL"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="contact-form__message mt-4">
          <textarea
            rows="10"
            className="contact-form__message"
            placeholder="description"
            onChange={(e)=> setDescription(e.target.value)}
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
