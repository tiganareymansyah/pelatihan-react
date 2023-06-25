import { BsApple } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  return (
    <header className="header-nav">
      <div className="div-nav">
        <BsApple className="logo-apple" />
        <h1>Apple.com</h1>
      </div>
      <button className="button-logout"><FiLogOut className="logo-logout"/> Logout</button>
    </header>
  );
}
