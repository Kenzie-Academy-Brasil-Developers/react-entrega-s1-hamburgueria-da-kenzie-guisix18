import "./style.css"

const CartTotal = ({currentSale}) => {
    return (
        <div className="totalMoney cart__products">
            <h4>Total</h4>
            <span> R$ {currentSale.reduce((valorInicial, valorAnterior) => {
                return valorInicial + valorAnterior.price;
            }, 0).toFixed(2)}</span>
        </div>    
    )
}

export default CartTotal;