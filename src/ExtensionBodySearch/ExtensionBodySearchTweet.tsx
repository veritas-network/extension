import "./ExtensionBodySearchTweet.css";

export const ExtensionBodySearchTweet = () => {
  return (
    <div className={"extension-body-search-tweet"}>
      <img
        className={"extension-body-search-tweet-thumbnail"}
        src="./logo-background.jpg"
      />
      <div
        className={"extension-body-search-tweet-author-name-and-username-container"}
      >
        <div className={"extension-body-search-tweet-author-name"}>Veritas Network</div>
        <div className={"extension-body-search-tweet-author-username"}>@verinetwrk</div>
      </div>
    </div>
  );
};
