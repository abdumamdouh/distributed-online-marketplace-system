import './ContactInfo.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {getUserAccountAction} from '../../../redux/actions/users'
const ContactInfo = () =>{
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getUserAccountAction())
  // },[dispatch]);
  const {userInfo} = useSelector(state =>state.user)
  const {user} = userInfo
  console.log(user)
  return (
    <div className="contact-info">
      <h4
        className="contact-info__title
      contact-info__title--main mb-5"
      >
       Info
      </h4>
      <h4 className="contact-info__title mb-2">Name</h4>
      <p className="contact-info__text mb-4">
       {user.name}
      </p>
      <h4 className="contact-info__title mb-2">cach balance</h4>
      <p className="contact-info__text mb-4">{user.balance}</p>
      <h4 className="contact-info__title mb-2">E-mail</h4>
      <p className="contact-info__text mb-4">
        {user.email}
        <br />
      </p>
    </div>
  );
};

export default ContactInfo;
