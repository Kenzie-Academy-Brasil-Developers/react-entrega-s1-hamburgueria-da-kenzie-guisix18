import Product from "../Product";
import "./style.css";
import { toast } from "react-toastify";

const ProductList = ({products, filteredProducts, setCurrentSale, currentSale}) => {

    const addToCart = (productId) => {
        const findProduct = products.find((product) => product.id === productId);
        const verifyProduct = currentSale.find((product) => product.id === findProduct.id);
        if (verifyProduct === undefined) {
            setCurrentSale(oldState => [...oldState, findProduct]);
            toast.success("Adicionado ao carrinho!");
        } else {
            toast.error("Já existe esse produto no carrinho!"); 
        }   
    }

    return (
        <section className="section__products">
            {filteredProducts.length > 0 ? 
            filteredProducts.map((product) => {
                return <Product key={product.id} product={product} addToCart={addToCart} />
            })
            :
            products.map((product) => {
                return <Product key={product.id} product={product} addToCart={addToCart} />
            })
            }
            
        </section>
    )
}

export default ProductList;