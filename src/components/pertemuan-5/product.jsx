import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import "./product.css";

export default function Product({ name, urlImages, price, desc }) {
  const [like, setLike] = useState(true);
  const [background, setBackground] = useState(true);
  const [countLike, countSetLike] = useState(0);

  const handleClickLike = () => {
    setLike(!like);
    setBackground(!background);
    countSetLike(() => {
      if(!background) {
        countLike + 1;
      }
      else {
        countLike - 1;
      }
    });
  };

  return (
    <div className="div-product">
      <img src={urlImages} className="img-barang" />
      <p>Nama : {name}</p>
      <p>Harga : {price}</p>
      <p>Deskripsi : {desc}</p>
      <div className="div-beli">
        <span className="span-like" onClick={handleClickLike}>
          {background ? (<AiOutlineHeart className="like" /> ) : (<AiFillHeart fill="#f11" />)}
          <p className="p-count-like">{}</p>
        </span>
        <span className="span-comment">
          <FaRegComment />
        </span>
        <span className="button-beli">
          <BsCartPlusFill />
        </span>
      </div>
    </div>
  );
}
