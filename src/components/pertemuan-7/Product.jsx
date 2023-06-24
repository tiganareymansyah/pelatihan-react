export default function Product({ name, image, price }) {
    return (
        <div className="div-product1">
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{price}</p>
            <button>Beli</button>
        </div>
    )
}