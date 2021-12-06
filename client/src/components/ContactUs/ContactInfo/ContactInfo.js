import './ContactInfo.scss';

const ContactInfo = () => {
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
        1600 Amphitheatre Parkway New York
      </p>
      <h4 className="contact-info__title mb-2">cach balance</h4>
      <p className="contact-info__text mb-4">1.800.458.556</p>
      <h4 className="contact-info__title mb-2">E-mail</h4>
      <p className="contact-info__text mb-4">
        support@your-domain.com
        <br />
        help@your-domain.com
        <br />
        SALES
      </p>
    </div>
  );
};

export default ContactInfo;
