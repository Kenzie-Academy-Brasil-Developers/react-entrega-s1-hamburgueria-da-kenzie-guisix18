import { useEffect, useState } from 'react';
import ProductList from './components/ProducstList';
import Header from './components/Header';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response) => response.json())
    .then((response) => setProducts(response))
  }, [])

  const showProducts = (Product) => { 
    const validate = Product.toLowerCase();
    const filter = products.filter((product) => product.name.toLowerCase().includes(validate) || product.category.toLowerCase().includes(validate))
    setFilteredProducts(filter);
  }

  return (
    <>
    <ToastContainer />
      <Header showProducts={showProducts}/>
      <main>
        <ProductList products={products} filteredProducts={filteredProducts} setCurrentSale={setCurrentSale} currentSale={currentSale} />
        <Cart cartProducts={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    </>
  );
}

export default App;