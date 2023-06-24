import { useState } from "react";

// const fruits = [
//     "Apple",
//     "Banana",
//     "Mango"
// ]

export default function Fruits() {
  // const fruitDivs = fruits.map((f) =>
  //     <div key={f}>{f}</div>
  // );

  const [fruit, setFruit] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState(null);

  return (
    <div>
      {fruit.map((f, i) => (
        <div key={i}>{f}</div>
      ))}
      <button
        onClick={() => {
          setFruit(fruit.slice(0, -1));
        }}
      >
        Hapus Belakang
      </button>
      <form>
        <input type="text" onChange={(e) => setNewFruit(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            setFruit([...fruit, newFruit])
          }}
        >
          Tambah Belakang
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFruit([newFruit, ...fruit])
          }}
        >
          Tambah Depan
        </button>
      </form>
    </div>
  );
}
