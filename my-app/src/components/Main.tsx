import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"
import AddProductModal from "./AddProductModal"

const Main = () => {
  const [prod, setProd] = useState([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);

  const getProducts = () => {
      fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => setProd(json));
  };

  const addProduct = (newProduct: any) => {
      setProd((prevProd) => [...prevProd, newProduct]);
  };

  useEffect(() => {
      getProducts();
  }, []);

  return (
      <div>
          <Navbar setSearch={setSearch} setShowAddProduct={setShowAddProduct} />
          <Menubar setMenu={setMenu} />
          <Home products={prod} search={search} menu={menu} />
          <Footer />
          {showAddProduct && <AddProductModal addProduct={addProduct} setShowAddProduct={setShowAddProduct} />}
      </div>
  );
};

export default Main;



