import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <main>
            <h1>Contact</h1>
            <p>
                Silahkan hubungi nomor 081234567890
            </p>
            <Link to={"/"}>Kembali ke beranda</Link>
        </main>
    )
}