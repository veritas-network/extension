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
        <div>
          Join Twitter Veritas
          <button className={"auth-button"}>Continue with Twitter</button>
          <button className={"auth-button"}>Continue with Google</button>
          <button className={"auth-button"}>Continue with Twitter</button>
          <button className={"auth-button"}>Continue with Apple</button>
        </div>
      </div>
      <div className={"extension-footer"}>
        <BsSearch size={30} />
        <BsPersonFill size={35} />
      </div>
    </div>
  );
}

export default App;
