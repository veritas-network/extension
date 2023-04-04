import { BsSearch, BsPersonFill, BsXLg } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={"extension-header"}>
        <img className={"extension-header-logo"} src={"./logo128.png"} />
        <BsXLg className={"extension-header-close"} size={22} />
      </div>
      <div className={"extension-body"}>
        <div className={"auth-body"}>
          <div className={"auth-body-join"}> Join Twitter Veritas</div>
          <button className={"auth-button"}>
            <img
              className="auth-button-logo auth-button-logo-twitter"
              src={"./logo-twitter.png"}
            />
            Continue with Twitter
          </button>
          <button className={"auth-button"}>
            <img
              className="auth-button-logo auth-button-logo-discord"
              src={"./logo-discord.png"}
            />
            Continue with Discord
          </button>
          <button className={"auth-button"}>
            <img
              className="auth-button-logo auth-button-logo-google"
              src={"./logo-google.png"}
            />
            Continue with Google
          </button>
          <button className={"auth-button"}>
            <img
              className="auth-button-logo auth-button-logo-apple"
              src={"./logo-apple.png"}
            />
            Continue with Apple
          </button>
        </div>
      </div>
      <div className={"extension-footer"}>
        <div className={"extension-footer-part"}>
          <BsSearch size={20} />
        </div>
        <div className={"extension-footer-part"}>
          <BsPersonFill size={25} />
        </div>
      </div>
    </div>
  );
}

export default App;
