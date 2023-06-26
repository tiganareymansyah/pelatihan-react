import { Link } from "react-router-dom";

export default function About() {
    return (
        <main>
            <h1>About</h1>
            <p>
                Integer Store adalah sebuah e-commerce yang menjual berbagai produk apple.
            </p>
            <Link to={"/"}>Kembali ke beranda</Link>
        </main>
    )
}