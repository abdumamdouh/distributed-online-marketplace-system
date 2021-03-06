import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from "../types";

const initialState = {
  loading: true,
  products: [],
  cart: [],
  singleProduct: {}
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };

    case ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product._id === action.payload
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item._id === action.payload ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload)
      };

    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        loading: false,
        singleProduct: action.payload
      };

    //add product
    case ADD_PRODUCT:
      return ;
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload.product] };
    case ADD_PRODUCT_FAIL:
      return ;

    //user purchase product
    // case PURCHASE_PRODUCT:
    //   return;
    // case PURCHASE_PRODUCT_SUCCESS:
    //   return { product: action.payload };
    // case PURCHASE_PRODUCT_FAIL:
    //   return ;

    //user delete product
    case DELETE_PRODUCT:
      return ;
    case DELETE_PRODUCT_SUCCESS:
  
      return {
        ...state,
        products: state.products.filter(
          (item) => item._id !== action.payload
        )
        
      };
    case DELETE_PRODUCT_FAIL:
      return ;
    default:
      return state;
  }
};

export default productsReducer;
