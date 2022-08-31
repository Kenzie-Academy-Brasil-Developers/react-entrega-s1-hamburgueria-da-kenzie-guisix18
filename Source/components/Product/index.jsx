import "./style.css";

const Product = ({product, addToCart}) => {
    return (
        <div className="card__product">
            <figure>
                <img src={product.img} alt={product.name} />
            </figure>
            <h2 className="productName space">{product.name}</h2>
            <p className="category space">{product.category}</p>
            <p className="price space">R$ {product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product.id)} className="cardButtons space">Adicionar</button>
        </div>
    )
}

export default Product;