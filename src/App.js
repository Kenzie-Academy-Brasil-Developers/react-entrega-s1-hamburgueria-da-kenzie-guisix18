import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProducstList';
import Header from './components/Header';
import Cart from './components/Cart';

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
    const filter = products.filter((product) => product.name.toLowerCase() === validate || product.category.toLowerCase() === validate);
    setFilteredProducts(filter);
  }

  const handleClick = (productId) => {
    const findProduct = products.find((product) => product.id === productId);
    setCurrentSale([...currentSale, findProduct]);
  }

  return (
    <>
      <Header showProducts={showProducts}/>
      <main>
        <ProductList products={products} handleClick={handleClick} filteredProducts={filteredProducts} />
        <Cart cartProducts={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    </>
    
  );
}

export default App;