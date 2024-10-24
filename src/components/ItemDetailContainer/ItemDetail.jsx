import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

    return (
        <div className="item-detail"> 
            <img src={product.image} className="img-item-detail" width={300} alt="" />
            <h2 className="title-item-detail">{product.name}</h2>
            <p className="text-item-detail-description">{product.description}</p>
            <p className="text-item-detail-price">Precio: ${product.price}</p>
            <Link to="/" className="btn-item">Volver a la tienda</Link>
        </div>
    )

}

export default ItemDetail