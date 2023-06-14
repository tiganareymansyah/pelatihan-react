export default function Product({ name, price, desc }) {
  return (
      <div>
        <h1>{name}</h1>
        <p>Harga : {price}</p>
        <p>Desripsi : {desc}</p>
        <button>Beli</button>
      </div>
  );
}
