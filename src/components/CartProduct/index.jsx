import "./style.css";

const CartProduct = ({cartProduct, removeElement}) => {
 
    return (
        <div className="productCart">
            <>
                <figure>
                    <img src={cartProduct.img} alt={cartProduct.name}/>
                </figure>
                <div className="informations">
                    <h3 className="cartProductName">{cartProduct.name}</h3>
                    <p className="cartCategory">{cartProduct.category}</p>
                </div>
                <span onClick={() => removeElement(cartProduct.id)} className="removeCart">Remover</span>
            </>
        </div>
    )
}

export default CartProduct;