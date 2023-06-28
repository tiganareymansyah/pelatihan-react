import { BsApple } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import ButtonLogout from "../pertemuan-7.1/pages/ButtonLogout";

export default function Header() {
  return (
    <header className="header-nav">
      <Link className="div-nav" to={"/"}>
        <BsApple className="logo-apple" />
        <h1>Apple.com</h1>
      </Link>
      <NavLink to={"/"} className={(props) => props.isActive && "active"}>Beranda</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <ButtonLogout />
    </header>
  );
}
