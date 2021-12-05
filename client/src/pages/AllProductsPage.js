import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/actions/products';

import Banner from '../components/Banner/Banner';
import AllProducts from '../components/AllProducts/AllProducts';
import ClientSlider from '../components/ClientSlider/ClientSlider';
import Searchbar from '../components/Searchbar/Searchbar'
import productsBanner from '../assets/images/products-banner.jpg';

const AllProductsPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
    <Searchbar style={{width: '100%'}}/>
      <Banner image={productsBanner} />
      
      <AllProducts products={products} />
      <ClientSlider />
    </>
  );
};

export default AllProductsPage;
