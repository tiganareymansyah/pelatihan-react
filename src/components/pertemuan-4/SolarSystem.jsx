// import { useState } from "react";

// const planets = ["Mercury", "Venus", "Earth"];

// export default function SolarSystem() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//     console.log(index);
//   }

//   return (
//     <>
//       {/* <h1>{planets[index]}</h1> */}
//       <h1>{index}</h1>
//       <button onClick={handleClick}>Berikutnya</button>
//     </>
//   );
// }

const planets = ["Merkurius", "Venus", "Bumi", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus", "Pluto"];

export default function SolarSystem(props) {
    const {index, setIndex, showMore, setShowMore} = props;

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      <h1>{planets[index]}</h1>
      {showMore && <p>Planet ke-{index + 1} dalam tata surya.</p>}
      <button onClick={handleMoreClick}>
        {showMore ? "Sembunyikan" : "Tampilkan"} detail
      </button>
      <button onClick={() => setIndex(index - 1)} disabled={index === 0}>Sebelumnya</button>
      <button onClick={() => setIndex(index + 1)} disabled={index === planets.length - 1}>Berikutnya</button>
    </>
  );
}
