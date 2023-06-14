// // Importan pertemuan ke 4
// import SolarSystem from "./components/pertemuan-4/SolarSystem"
// import { useState } from "react"

// // Importan pertemuan ke 5
import Header from "./components/pertemuan-5/header";
import Product from "./components/pertemuan-5/product";

// // Variable pertemuan 5
const products = [
  {
    id: 1,
    name: "Mukena Rabbani",
    desc: "Mukena Pilihan",
    price: "Rp.150.000",
  },
  {
    id: 2,
    name: "Sarung Mangga",
    desc: "Sarung Pilihan",
    price: "Rp.50.000",
  },
  {
    id: 3,
    name: "Peci Wadimor",
    desc: "Peci Pilihan",
    price: "Rp.40.000",
  },
];

function App() {
  // // Ini pertemuan ke 4
  // const [index, setIndex] = useState(0);
  // const [showMore, setShowMore] = useState(false);

  // return (
  //   <>
  //     <SolarSystem index = {index} setIndex = {setIndex} showMore = {showMore} setShowMore = {setShowMore} />
  //     <SolarSystem index = {index} setIndex = {setIndex} showMore = {showMore} setShowMore = {setShowMore} />
  //     <SolarSystem index = {index} setIndex = {setIndex} showMore = {showMore} setShowMore = {setShowMore} />
  //   </>
  // );

  // // Ini pertemuan ke 5
  return (
    <>
      <Header />
      <main>
        {products.map((p) => (
          <Product key={p.id} name={p.name} desc={p.desc} price={p.price} />
        ))}
      </main>
    </>
  );

  // Mutasi adalah mengubah sebagian isi dari objek atau array.
  // Assignment adalah mengubah isi objek atau array jadi baru.
}

export default App;
