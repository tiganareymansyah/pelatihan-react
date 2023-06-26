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
// import { useState } from "react";
// import Product from "./components/pertemuan-7/Product";
// import Header from "./components/pertemuan-7/Header";
// import { AiOutlineSearch } from "react-icons/ai";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
// import "./components/pertemuan-7/index.css";

// // Importan pertemuan ke 7.1
import Home from "./components/pertemuan-7.1/pages/Home";
import About from "./components/pertemuan-7.1/pages/About";
import Header from "./components/pertemuan-7/Header";
import Contact from "./components/pertemuan-7.1/pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Variable pertemuan 7
// const products = [
//   {
//     id: 1,
//     name: "IPhone 14 Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg",
//     price: 30000000,
//   },
//   {
//     id: 2,
//     name: "MacBook Air 15",
//     image:
//       "https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg",
//     price: 40000000,
//   },
//   {
//     id: 3,
//     name: "Apple Vision Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg",
//     price: 50000000,
//   },
//   {
//     id: 4,
//     name: "Apple Watch",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small.jpg",
//     price: 2000000,
//   },

//   {
//     id: 5,
//     name: "IPad Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
//     price: 10000000,
//   },
//   {
//     id: 6,
//     name: "IPhone 14 Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg",
//     price: 30000000,
//   },
//   {
//     id: 7,
//     name: "MacBook Air 15",
//     image:
//       "https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg",
//     price: 40000000,
//   },
//   {
//     id: 8,
//     name: "Apple Vision Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg",
//     price: 50000000,
//   },
//   {
//     id: 9,
//     name: "Apple Watch",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small.jpg",
//     price: 2000000,
//   },

//   {
//     id: 10,
//     name: "IPad Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
//     price: 10000000,
//   },
//   {
//     id: 11,
//     name: "IPhone 14 Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg",
//     price: 30000000,
//   },
//   {
//     id: 12,
//     name: "MacBook Air 15",
//     image:
//       "https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg",
//     price: 40000000,
//   },
//   {
//     id: 13,
//     name: "Apple Vision Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg",
//     price: 50000000,
//   },
//   {
//     id: 14,
//     name: "Apple Watch",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small.jpg",
//     price: 2000000,
//   },

//   {
//     id: 15,
//     name: "IPad Pro",
//     image:
//       "https://www.apple.com/v/home/bb/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
//     price: 10000000,
//   },
// ];

export default function App() {
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
  // const [keyword, setKeyword] = useState("");
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(Infinity);
  // const [sortBy, setSortBy] = useState("id");
  // const [sortOrder, setSortOrder] = useState("asc");
  // const [page, setPage] = useState(1);

  // const filteredSortedProducts = products
  //   .toSorted((a, b) => {
  //     sortOrder === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
  //   })
  //   .filter((p) =>
  //     p.name.toLowerCase().includes(keyword) &&
  //     p.price >= minPrice &&
  //     p.price <= maxPrice
  //   );

  // return (
  //   <>
  //     <Header />
  //     <div className="div-nav1">
  //       <div className="div-search">
  //         <AiOutlineSearch className="logo-search" />
  //         <input
  //           type="text"
  //           placeholder="Search..."
  //           value={keyword}
  //           onChange={(e) => setKeyword(e.target.value)}
  //         />
  //       </div>
  //       <div className="div-harga">
  //         <label>Price : </label>
  //         <div className="div-min">
  //           <p>Minimal</p>
  //           <input
  //             type="number"
  //             value={minPrice}
  //             onChange={(e) => setMinPrice(e.target.value)}
  //           />
  //         </div>
  //         <div className="div-max">
  //           <p>Maximal</p>
  //           <input
  //             type="number"
  //             value={maxPrice}
  //             onChange={(e) => setMaxPrice(e.target.value || Infinity)}
  //           />
  //         </div>
  //       </div>
  //       <div className="div-sortby">
  //         <label>Sort By : </label>
  //         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
  //           <option value="id">Normal</option>
  //           <option value="price">Price</option>
  //         </select>
  //         <select
  //           value={sortOrder}
  //           onChange={(e) => setSortOrder(e.target.value)}
  //         >
  //           <option value="asc">Up</option>
  //           <option value="desc">Down</option>
  //         </select>
  //       </div>
  //     </div>
  //     <main className="main-product">
  //       {filteredSortedProducts
  //         .filter((_fsp, i) => i < 4 * page && i >= 4 * page - 4)
  //         .map((p) => (
  //           <Product key={p.id} {...p} />
  //         ))}
  //     </main>
  //     <div className="div-page">
  //       <button onClick={() => setPage(page - 1)} disabled={page === 1}>
  //         <GrLinkPrevious /> Before
  //       </button>
  //       <p>{page}</p>
  //       <button
  //         onClick={() => setPage(page + 1)}
  //         disabled={page === Math.round(filteredSortedProducts.length / 4)}
  //       >
  //         Next <GrLinkNext />
  //       </button>
  //     </div>
  //     <footer className="footer-name">
  //       <p>Copyright &copy; 2023 : Tigana Reymansyah</p>
  //     </footer>
  //   </>
  // );

  // // Ini pertemuan ke 7.1
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
