import { BsTwitter } from "react-icons/bs";
import "./ExtensionBodyAuth.css";

export const ExtensionBodyAuth = () => {
  return (
    <div className={"extension-body"}>
      <div className={"auth-body"}>
        <div className={"auth-body-join-title"}>
          Welcome to Veritas Network!
        </div>
        <div className={"auth-body-join-text"}>
          Track the accuracy of future predictions or factuality statements on
          Twitter. Crypto prices, conspiracy theories or simply weather
          tomorrow.
        </div>
        <button className={"auth-button-twitter"}>
          <BsTwitter style={{ marginRight: 8, color: "white" }} />
          Continue with Twitter
        </button>
      </div>
    </div>
  );
};
