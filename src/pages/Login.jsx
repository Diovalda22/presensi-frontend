import { useRef, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import client from "../router/Client";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Login() {
  const [loginMessage, setLoginMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputIdentifier = useRef();
  const inputPassword = useRef();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [identifier, password] = [
      inputIdentifier.current.value,
      inputPassword.current.value,
    ];

    client
      .post("/auth/login", { identifier, password })
      .then(({ data }) => {
        const userData = data.data.siswa;
        localStorage.setItem("token", data.token);
        localStorage.setItem("nama", data.data.name);
        localStorage.setItem("email", data.data.email);

        if (userData) {
          setLoginMessage("Berhasil Login");
          nav("/siswa");
        } else {
          setLoginMessage("Berhasil Login");
          nav("/admin");
        }
      })
      .catch(() => {
        setErrorMessage("Kesalahan Autentikasi. Hubungi administrator.");
      });
  };

  const [signUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <>
      <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title">Login</h2>
              {loginMessage ? (
                <Alert
                  icon={<CheckIcon fontSize="inherit" />}
                  severity="success"
                >
                  {loginMessage}
                </Alert>
              ) : errorMessage ? (
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
                  {errorMessage}
                </Alert>
              ) : null}

              <div className="input-field">
                <i className="fas fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input
                  type="text"
                  placeholder="NISN"
                  ref={inputIdentifier}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type={showPassword ? "text" : "password"}
                  ref={inputPassword}
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute translate-y-[75%] right-5"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    color="grey"
                    icon={showPassword ? faEye : faEyeSlash}
                  />
                </button>
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </form>

            {/* Sign Up Form */}
            <form action="#" className="sign-up-form">
              <h1 className="text-2xl font-bold">Tentang Kami</h1>
              <img
                src="assets/LogoKita.png"
                alt="Logo Kita"
                className="h-[10rem]"
              />
              <p className="text-center w-[80%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                tenetur debitis exercitationem ipsam eveniet temporibus
                possimus, deleniti expedita ex ut.
              </p>
              <div className="social-media pt-8">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Panels Container */}
        <div className="panels-container">
          {/* Left Panel */}
          <div className="panel left-panel">
            <div className="content">
              <h3>Tentang Kami</h3>
              <p>Pergi ke halaman tentang kami</p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Oke
              </button>
            </div>
            <img
              src="/assets/log.svg"
              className="image"
              alt="log illustration"
            />
          </div>

          {/* Right Panel */}
          <div className="panel right-panel">
            <div className="content">
              <h3>Log In</h3>
              <p>Kembali ke halaman Login👉</p>
              <button className="btn transparent" onClick={handleSignInClick}>
                Kembali
              </button>
            </div>
            <img
              src="/assets/register.svg"
              className="image"
              alt="register illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}
