import Product from "../Product";
import "./style.css";

const ProductList = ({products, handleClick, filteredProducts}) => {
    return (
        <section className="section__products">
            {filteredProducts.length > 0 ? 
            filteredProducts.map((product) => {
                return <Product key={product.id} product={product} handleClick={handleClick} />
            })
            :
            products.map((product) => {
                return <Product key={product.id} product={product} handleClick={handleClick} />
            })
            }
            
        </section>
    )
}

export default ProductList;