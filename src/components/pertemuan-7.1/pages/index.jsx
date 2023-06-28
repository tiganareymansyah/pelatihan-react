import { useState } from "react";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dataLogin = [
    {
      id: 1,
      email: "123",
      password: "123",
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header className="header-nav">
        <Link className="div-nav" to={"/"}>
          <BsApple className="logo-apple" />
          <h1>Apple.com</h1>
        </Link>
        <Link to={"/admin"}>
          <button className="button-admin">
            <RiAdminFill className="logo-admin" /> Admin
          </button>
        </Link>
      </header>
      <main className="main-login">
        <div className="div-form-login">
          <h2>Login User</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dataLogin.map((dl) => {
                if (dl.email === email) {
                  if (dl.password === password) {
                    alert("Login berhasil");
                    navigate("/product");
                  } else {
                    alert("Password salah");
                    navigate("/");
                  }
                } else {
                  alert("Email salah");
                  navigate("/");
                }
              });
            }}
          >
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="div-button-login">
              <button>Login</button>
            </div>
          </form>
          <div className="div-logintocreateaccount">
            <h5>{"Don't have account ?"}</h5>
            <Link to={"/register"} className="link-register">Register</Link>
          </div>
        </div>
      </main>
      <footer className="footer-login">
        <p>Copyright &copy; 2023 : Tigana Reymansyah</p>
      </footer>
    </>
  );
}
