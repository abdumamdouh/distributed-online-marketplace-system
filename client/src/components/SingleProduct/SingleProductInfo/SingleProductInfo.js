import { useDispatch } from 'react-redux';

import Stars from '../../Stars/Stars';

import { formatPrice } from '../../../utils/formatPrice';
import { addToCart } from '../../../redux/actions/products';

import './SingleProductInfo.scss';

const SingleProductInfo = ({ name, brand, price, stars, desription, id, seller }) => {
  const dispatch = useDispatch();
  console.log(id)
  return (
    <>
      <div className="singleProduct">
        <h3 className="singleProduct__title">{name}</h3>
        <p className="singleProduct__brand">
          {' '}
          <span className="singleProduct__brand--span">BRAND:</span> {brand}
        </p>
        <p className="singleProduct__brand">
          {' '}
          <span className="singleProduct__brand--span">Seller:</span> {seller}
        </p>
        <h4 className="singleProduct__price">{formatPrice(price)}</h4>
        <Stars stars={stars} />
        <p className="singleProduct__desc">{desription}</p>
      </div>
      <button
        onClick={() => dispatch(addToCart(id))}
        type="button"
        className="btn btn-primary"
      >
        Add To Cart
      </button>
    </>
  );
};

export default SingleProductInfo;
