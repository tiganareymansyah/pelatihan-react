const planets = ["Mercury", "Venus", "Earth"];
export default function SolarSystem() {
  let index = 0;
  function handleClick() {
    index++;
  }
  return (
    <>
      <h1>{planets[index]}</h1>
      <button onClick={handleClick}>Berikutnya</button>
    </>
  );
}
