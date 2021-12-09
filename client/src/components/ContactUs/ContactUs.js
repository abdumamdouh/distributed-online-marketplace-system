import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
import Title from "../Title/Title";
import Stores from "../Stores/Stores";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import { deleteProductAction } from "../../redux/actions/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ContactUs = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { userInfo } = useSelector(state => state.user);
  const { user } = userInfo;
  const handleDelete = (e, id, usertoken) => {
    e.preventDefault();
    dispatch(deleteProductAction(id, usertoken));
  };
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Profile" />
        <div className="row">
          <div className="col-10 col-md-3 mx-auto">
            <ContactInfo />
          </div>
          <div className="col-10 col-md-9 mx-auto">
            <ContactForm />
          </div>
        </div>
        <div className="pt-5 pb-4">
          <Title title="To be Sold Products" />
        </div>
        <div className="row">
          {products
            .filter(product => product.seller === user.name)
            .map(product => {
              return (
                <div
                  key={product.id}
                  className="col-10 col-md-6 col-lg-4 mx-auto"
                >
                  <Product product={product} />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={()=> dispatch(deleteProductAction(product.id))}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
        <div className="pt-5 pb-4">
          <Title title="Purchased Products" />
        </div>
        <div className="row">
          {user.purchasedItems.length > 0 && user.purchasedItems.map(product => {
            return (
              <div
                key={product.id}
                className="col-10 col-md-6 col-lg-4 mx-auto"
              >
                <Product product={product} />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={e => {
                    handleDelete(e, product.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
