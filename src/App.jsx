// // Importan pertemuan ke 4
// import SolarSystem from "./components/pertemuan-4/SolarSystem"
// import { useState } from "react"

// // Importan pertemuan ke 5
// import Header from "./components/pertemuan-5/header";
// import Product from "./components/pertemuan-5/product";

// // Variable pertemuan 5
// const products = [
//   {
//     id: 1,
//     name: "Air Jordan Wmns Aj 1 Mid",
//     urlImages: "https://www.ncrsport.com/img/storage/large/DN3738-400-1.jpg?2023-03-06%2011:33:39",
//     price: "Rp.2.800.000,-",
//     desc: "Sepatu Air Jordan Wmns Aj 1 Mid dengan harga Rp.2.800.000,- adalah kualitas terbaik ke 1.",
//   },
//   {
//     id: 2,
//     name: "Yeezy 350 V2 Black Cooper",
//     urlImages: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/1/234025d9-85bc-48fb-9bfb-8aa815feacf8.jpg",
//     price: "Rp.500.000,-",
//     desc: "Sepatu Yeezy 350 V2 Black Cooper dengan harga Rp.500.000,- adalah kualitas terbaik ke 2.",
//   },
//   {
//     id: 3,
//     name: "Macbeth you're fucking idiots",
//     urlImages: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/2/13/a4d96e55-6c0f-428f-ae3a-4794ddf3ac37.jpg",
//     price: "Rp.200.000,-",
//     desc: `Sepatu Macbeth you're fucking idiots dengan harga Rp.200.000,- adalah kualitas terbaik ke 3.`,
//   },
// ];

// // Importan pertemuan ke 6
// import Fruits from "./components/pertemuan-6/Fruits";

// // Importan pertemuan ke 7
import { useState } from "react";
import Product from "./components/pertemuan-7/Product";
import "./index.css";

// // Variable pertemuan 7
const products = [
  {
    id: 1,
    name: "IPhone 14 Pro",
    image:
      "https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg",
    price: 30000000,
  },
  {
    id: 2,
    name: "MacBook Air 15",
    image:
      "https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg",
    price: 40000000,
  },
  {
    id: 3,
    name: "Apple Vision Pro",
    image:
      "https://www.apple.com/v/home/bb/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg",
    price: 50000000,
  },
  {
    id: 4,
    name: "Apple Watch",
    image:
      "https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small.jpg",
    price: 2000000,
  },

  {
    id: 5,
    name: "IPad Pro",
    image:
      "https://www.apple.com/v/home/bb/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
    price: 10000000,
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
  // return (
  //   <>
  //     <Header />
  //     <main>
  //       {products.map((p) => (
  //         <Product key={p.id} name={p.name} urlImages={p.urlImages} price={p.price} desc={p.desc} />
  //       ))}
  //     </main>
  //   </>
  // );
  // Mutasi adalah mengubah sebagian isi dari objek atau array.
  // Assignment adalah mengubah isi objek atau array jadi baru.

  // // Ini pertemuan ke 6
  // return <Fruits />

  // // Ini pertemuan ke 7
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState("name");

  return (
    <>
      <div>
        <label>Cari : </label>
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div>
        <label>Harga minimal : </label>
        <input
          type="number"
          placeholder="Search..."
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Harga maximal : </label>
        <input
          type="number"
          placeholder="Search..."
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value || Infinity)}
        />
      </div>
      <div>
        <label>Urut Berdasarkan</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="div-product">
        {products
          .filter(
            (s) =>
              s.name.toLowerCase().includes(keyword) ||
              (s.name.toUpperCase().includes(keyword) &&
                s.price >= minPrice &&
                s.price <= maxPrice)
          )
          .sort((a, b) => b[sortBy] - a[sortBy])
          .map((e, i) => {
            return <Product key={i} {...e} />;
          })}
      </div>
    </>
  );
}

export default App;
