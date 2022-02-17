import "./style.css";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

const Cart = ({cartProducts, setCurrentSale}) => {

    const removeElement = (productId) => {
        const newCartProduct = cartProducts.filter((product) => product.id !== productId);
        setCurrentSale(newCartProduct);
    }

    return (
        <>
        <div className="cart">
        <h2>Carrinho de compras</h2>
        {cartProducts.length === 0  ?

        <div className="cartBackground">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
        </div>

        :
        
        <div className="cart__products">
            {cartProducts.map((product) => (
                <CartProduct key={product.id} cartProduct={product} removeElement={removeElement} />
            ))}
        </div>
        }
        <CartTotal currentSale={cartProducts} />
        </div>
        
        </>
    )
}

export default Cart