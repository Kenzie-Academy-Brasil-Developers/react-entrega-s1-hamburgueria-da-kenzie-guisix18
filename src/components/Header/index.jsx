import { useState } from "react";
import "./style.css";

const Header = ({showProducts}) => {

    const [productInfo, setProductInfo] = useState("");

    return (
        <nav className="navigation">
            <h1>Burguer <span>Kenzie</span></h1>
            <div className="div__input-search">
                <input onChange={(event) => setProductInfo(event.target.value)} className="input__search" type="text" placeholder="Digitar Pesquisa" />
                <span className="span__button">
                    <button onClick={() => showProducts(productInfo)} className="button">Pesquisar</button>
                </span>
            </div>
        </nav>
    )
}

export default Header;