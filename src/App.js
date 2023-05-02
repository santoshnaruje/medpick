import "./App.css";
import { GiDigitalTrace } from "react-icons/gi";
import { CgTrack } from "react-icons/cg";
import { RiHandCoinFill } from "react-icons/ri";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="card-container">
          <header>
            <nav className="navbar d-flex flex-row justify-content-around">
              <img
                className="logo absolute"
                src="https://medpick.in/wp-content/uploads/2020/03/Vajra-logo.png"
                alt="logo"
              />
              <h6>HOME</h6>
              <h6>+916305008070</h6>
            </nav>
          </header>

          <div className="row">
            <div className="col-md-5 card mt-3 features-card m-3 p-3">
              <h1 className="text-center m-3">Features</h1>
              <div className="d-flex flex-row ">
                <div className="icon">
                  <GiDigitalTrace style={{ width: "50px", height: "70px" }} />
                </div>
                <div className="d-flex flex-column">
                  <h2>Digitaze</h2>
                  <p>A Bird eye view of the entire Biomedical Operations.</p>
                </div>
              </div>
              <div className="d-flex flex-row ">
                <div className="icon">
                  <CgTrack style={{ width: "50px", height: "70px" }} />
                </div>
                <div className="d-flex flex-column">
                  <h2>Track</h2>
                  <p>Track the product life cycle and service history.</p>
                </div>
              </div>
              <div className="d-flex flex-row ">
                <div className="icon">
                  <RiHandCoinFill style={{ width: "50px", height: "70px" }} />
                </div>
                <div className="d-flex flex-column">
                  <h2>Biomedical Budget</h2>
                  <p>
                    Regulate and save budget through analysed data and informed
                  </p>
                </div>
              </div>
            </div>

            <div className="form-card card col-md-5 mt-3 m-3">
              <h3 className="sign">Sign In</h3>
              <hr />
              <form className="p-4">
                <h3 className="login-head">Sign in to your account</h3>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label font-weight-bold"
                  >
                    Email id
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label font-weight-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <p className="text-danger text-bold">Forgot password</p>
                <button className="btn button">Sign in</button>
                <p className="new-to">
                  New to vazra?<span className="span-para">Sign up now</span>
                </p>
              </form>
            </div>
          </div>
          <div className="download d-flex flex-row justify-content-center mt-3 align-items-center">
            <h6 className="login-head">Download our app now</h6>
            <img
              className="google-play"
              src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
              alt="google"
            />
            <img
              className="google-play"
              src="https://developer.apple.com/news/images/download-on-the-app-store-badge.png"
              alt="ios"
            />
          </div>

          <footer>
            <div className="footer d-flex justify-content-around align-items-center">
              <div className="d-flex align-items-center">
                <img
                  className="footer-logo"
                  src="https://medpick.in/wp-content/uploads/2020/03/Vajra-logo.png"
                  className="logo"
                  alt="vajra"
                />
                <p className="footer-logo"> ©2020 VAJRA, All Right Reserved</p>
              </div>
              <p className="logo-footer">Terms & Conditions | FAQ'S</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
