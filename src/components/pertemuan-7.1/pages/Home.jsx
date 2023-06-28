import { BsApple } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header className="header-nav">
        <Link className="div-nav" to={"/product"}>
          <BsApple className="logo-apple" />
          <h1>Apple.com</h1>
        </Link>
        <NavLink
          to={"/product"}
          className={(props) => props.isActive && "active"}
        >
          Beranda
        </NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <Link>
          <button className="button-logout">
            <FiLogOut className="logo-logout" /> Logout
          </button>
        </Link>
      </header>
    </>
  );
}
