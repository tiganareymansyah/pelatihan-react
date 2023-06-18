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
    name: "Air Jordan Wmns Aj 1 Mid",
    urlImages: "https://www.ncrsport.com/img/storage/large/DN3738-400-1.jpg?2023-03-06%2011:33:39",
    price: "Rp.2.800.000,-",
    desc: "Sepatu Air Jordan Wmns Aj 1 Mid dengan harga Rp.2.800.000,- adalah kualitas terbaik ke 1.",
  },
  {
    id: 2,
    name: "Yeezy 350 V2 Black Cooper",
    urlImages: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/1/234025d9-85bc-48fb-9bfb-8aa815feacf8.jpg",
    price: "Rp.500.000,-",
    desc: "Sepatu Yeezy 350 V2 Black Cooper dengan harga Rp.500.000,- adalah kualitas terbaik ke 2.",
  },
  {
    id: 3,
    name: "Macbeth you're fucking idiots",
    urlImages: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/2/13/a4d96e55-6c0f-428f-ae3a-4794ddf3ac37.jpg",
    price: "Rp.200.000,-",
    desc: `Sepatu Macbeth you're fucking idiots dengan harga Rp.200.000,- adalah kualitas terbaik ke 3.`,
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
          <Product key={p.id} name={p.name} urlImages={p.urlImages} price={p.price} desc={p.desc} />
        ))}
      </main>
    </>
  );

  // Mutasi adalah mengubah sebagian isi dari objek atau array.
  // Assignment adalah mengubah isi objek atau array jadi baru.
}

export default App;
