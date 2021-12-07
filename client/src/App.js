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
  Login,
  PageNotFound404
} from "./pages";

// components
import Navbar from "./components/Navbar/Navbar";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

// scroll to top component
import ScrollToTop from "./utils/ScrollToTop";

// protected route
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} name="Home Page" />
        <Route exact path="/login" component={Login} name="Login Page" />
        <ProtectedRoute
          exact
          path="/shirts"
          component={Shirts}
          name="Shirts Page"
        />
        <ProtectedRoute
          exact
          path="/shoes"
          component={Shoes}
          name="Shoes Page"
        />
        <ProtectedRoute
          exact
          path="/headphones"
          component={HeadPhones}
          name="HeadPhones Page"
        />
        <ProtectedRoute
          exact
          path="/reports"
          component={About}
          name="About Page"
        />
        <ProtectedRoute
          exact
          path="/account"
          component={Contact}
          name="Contact Page"
        />
        <ProtectedRoute exact path="/cart" component={Cart} name="Cart Page" />
        <ProtectedRoute
          exact
          path="/products"
          component={AllProducts}
          name="AllProducts Page"
        />
        <ProtectedRoute
          exact
          path="/products/:id"
          component={SingleProduct}
          name="SingleProduct Page"
        />

        {/* <Route exact path="/products/:id" children={<SingleProduct />} /> */}

        <Route
          exact
          path="/404"
          component={PageNotFound404}
          name="Error Page"
        />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
