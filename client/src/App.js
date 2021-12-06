import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// pages
import {
  Home,
  Shirts,
  Shoes,
  HeadPhones,
  About,
  Contact,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
  Login
} from "./pages";

// components
import Navbar from "./components/Navbar/Navbar";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

// scroll to top component
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} name="Home Page" />
        <Route exact path="/login" component={Login} name="Login Page" />
        <Route exact path="/shirts" component={Shirts} name="Shirts Page" />
        <Route exact path="/shoes" component={Shoes} name="Shoes Page" />
        <Route
          exact
          path="/headphones"
          component={HeadPhones}
          name="HeadPhones Page"
        />
        <Route exact path="/about" component={About} name="About Page" />
        <Route exact path="/account" component={Contact} name="Contact Page" />
        <Route exact path="/cart" component={Cart} name="Cart Page" />
        <Route
          exact
          path="/products"
          component={AllProducts}
          name="AllProducts Page"
        />
        <Route
          exact
          path="/products/:id"
          component={SingleProduct}
          name="SingleProduct Page"
        />

        {/* <Route exact path="/products/:id" children={<SingleProduct />} /> */}

        <Route exact path="/404" component={Error} name="Error Page" />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
