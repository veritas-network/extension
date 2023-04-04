import "./Auth.css";

export const Auth = () => {
  return (
    <div className={"extension-body"}>
      <div className={"auth-body"}>
        <div className={"auth-body-join"}> Join Twitter Veritas</div>
        <button className={"auth-button auth-button-twitter"}>
          <img
            className="auth-button-logo auth-button-logo-twitter"
            src={"./logo-twitter.png"}
          />
          Continue with Twitter
        </button>
        <button className={"auth-button auth-button-discord"}>
          <img
            className="auth-button-logo auth-button-logo-discord"
            src={"./logo-discord.png"}
          />
          Continue with Discord
        </button>
        <button className={"auth-button auth-button-google"}>
          <img
            className="auth-button-logo auth-button-logo-google"
            src={"./logo-google.png"}
          />
          Continue with Google
        </button>
        <button className={"auth-button auth-button-apple"}>
          <img
            className="auth-button-logo auth-button-logo-apple"
            src={"./logo-apple.png"}
          />
          Continue with Apple
        </button>
      </div>
    </div>
  );
};
