import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../redux/actions/products";

import MainBanner from "../components/MainBanner/MainBanner";
import Categories from "../components/Categories/Categories";
import BestProducts from "../components/BestProducts/BestProducts";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";
import ClientSlider from "../components/ClientSlider/ClientSlider";

const HomePage = () => {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const { userInfo } = useSelector(state => state.user);
  const { user } = userInfo;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const featuredProducts = products.filter(
    product => product.featured === true && product.seller !== user.name
  );

  const bestProducts = products.filter(
    product => product.best === true && product.seller !== user.name
  );

  return (
    <>
      <MainBanner />
      <Categories />
      <BestProducts bestProducts={bestProducts} />
      {/* <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="30% off"
        title="lifestyle collection"
        text="free shipping on orders over $99"
      /> */}
      <FeaturedProducts featuredProducts={featuredProducts} />
      <ClientSlider />
    </>
  );
};

export default HomePage;
