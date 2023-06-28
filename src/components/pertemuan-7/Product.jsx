import { BsCartPlusFill } from "react-icons/bs";

export default function Product({ name, image, price }) {
  return (
    <div className="div-product">
      <img src={image} alt={name} />
      <p>Name : {name}</p>
      <p>
        Price : {price.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}
      </p>
      <button><BsCartPlusFill className="logo-beli" />Buy</button>
    </div>
  );
}
