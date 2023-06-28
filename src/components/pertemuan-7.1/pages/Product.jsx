import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import ListProduct from "./ListProduct";
import "./Product.css"

export default function Product() {

  const [products, setProducts] = useState([
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
    {
      id: 6,
      name: "IPhone 14 Pro",
      image:
        "https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg",
      price: 30000000,
    },
    {
      id: 7,
      name: "MacBook Air 15",
      image:
        "https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg",
      price: 40000000,
    },
    {
      id: 8,
      name: "Apple Vision Pro",
      image:
        "https://www.apple.com/v/home/bb/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg",
      price: 50000000,
    },
    {
      id: 9,
      name: "Apple Watch",
      image:
        "https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small.jpg",
      price: 2000000,
    },
  
    {
      id: 10,
      name: "IPad Pro",
      image:
        "https://www.apple.com/v/home/bb/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
      price: 10000000,
    },
    {
      id: 11,
      name: "IPhone 14 Pro",
      image:
        "https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg",
      price: 30000000,
    },
    {
      id: 12,
      name: "MacBook Air 15",
      image:
        "https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg",
      price: 40000000,
    },
    {
      id: 13,
      name: "Apple Vision Pro",
      image:
        "https://www.apple.com/v/home/bb/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg",
      price: 50000000,
    },
    {
      id: 14,
      name: "Apple Watch",
      image:
        "https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small.jpg",
      price: 2000000,
    },
  
    {
      id: 15,
      name: "IPad Pro",
      image:
        "https://www.apple.com/v/home/bb/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
      price: 10000000,
    },
  ]);

  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  // const [edited, setEdited] = useState();

  const filteredSortedProducts = products
    .toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter(
      (p) =>
        p.name.toLowerCase().includes(keyword) &&
        p.price >= minPrice &&
        p.price <= maxPrice
    );

  return (
    <>
      <div className="div-nav1">
        <div className="div-search">
          <AiOutlineSearch className="logo-search" />
          <input
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="div-harga">
          <label className="label-price">Price : </label>
          <div className="div-min">
            <p>Minimal</p>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="div-max">
            <p>Maximal</p>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value || Infinity)}
            />
          </div>
        </div>
        <div className="div-sortby">
          <label className="label-sortby">Sort By : </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">Normal</option>
            <option value="price">Price</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Up</option>
            <option value="desc">Down</option>
          </select>
        </div>
      </div>
      <main className="main-product">
        {filteredSortedProducts
          .filter((_fsp, i) => i < 4 * page && i >= 4 * page - 4)
          .map((p) => (
            <ListProduct key={p.id} {...p} />
          ))}
      </main>
      <div className="div-page">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <GrLinkPrevious /> Before
        </button>
        <p className="p-page">{page}</p>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(filteredSortedProducts.length / 4)}
        >
          Next <GrLinkNext />
        </button>
      </div>
    </>
  );
}
