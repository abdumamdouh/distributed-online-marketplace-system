import React from "react";
import "./Searchbar.css";
import {useState} from "react";
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import AllProducts from '../AllProducts/AllProducts'
const Searchbar = () => {
 const [searchText, setSearchText] = useState("");
 const { products} = useSelector((state) => state.products);
 const {userInfo} = useSelector(state =>state.user)
  const {user} = userInfo
  const filteredProducts = products.filter(product => product.seller !== user.name)
  return (
   
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="searchbar"
       onChange={e => setSearchText(e.target.value)}
      />
      {/* {filteredProducts.filter(item =>{
        if(searchText=="")
        {return <AllProducts products={filteredProducts}/>}
        else if (item.name.toLowerCase().includes(searchText.toLowerCase()))
        {return item}
      }).map((item,key)=>{
        return (
          <div  key={item.id}
                className="col-10 col-md-6 col-lg-4 mx-auto"
              >
                <Product product={item} />
              </div>
        )})
        } */}
      
    </div>
  );
};

export default Searchbar;
