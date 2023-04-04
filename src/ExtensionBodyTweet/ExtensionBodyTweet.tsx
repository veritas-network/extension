import "./ExtensionBodyTweet.css";

export const ExtensionBodyTweet = () => {
  return (
    <div className={"extension-body"} style={{ padding: 20}}>
      <div className={"extension-body-tweet-voting-options-container"}>
        <div
          className={"extension-body-tweet-voting-option"}
          style={{ width: "75%" }}
        >
          {75}% True
        </div>
        <div
          className={"extension-body-tweet-voting-option"}
          style={{ width: "35%" }}
        >
          {25}% False
        </div>
      </div>
      <div className={"extension-body-tweet-votes"}>1000 votes</div>
      <div>
        This that represents only what the people think now. Basads asdadsad
        asds adsad. Adadasd asdadsd asdasdasds ads.
      </div>
    </div>
  );
};
