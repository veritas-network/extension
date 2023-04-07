export const initMutationObserver = () => {
  const tweetStatsContainerQuerySelector = "div .css-1dbjc4n .r-1ta3fxp";
  const tweetContainerQuerySelector =
    "div .css-1dbjc4n.r-j5o65s.r-qklmqi.r-1adg3ll.r-1ny4l3l";
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let addedNode of mutation.addedNodes) {
        // Ignore SCRIPT nodes
        if (addedNode.nodeName === "SCRIPT") continue;
        // Ignore IMG nodes
        if (addedNode.nodeName === "IMG") continue;
        // Ignore TITLE nodes
        if (addedNode.nodeName === "TITLE") continue;
        // Ignore H2 nodes
        if (addedNode.nodeName === "H2") continue;

        // Logs all every addedNode
        //console.log("addedNode", addedNode.nodeName, addedNode);

        //return;

        // If this is a tweet container
        if (
          addedNode.childNodes.length > 0 &&
          (addedNode.childNodes[0] as Element).className ===
            "css-1dbjc4n r-j5o65s r-qklmqi r-1adg3ll r-1ny4l3l"
        ) {
          // This is a tweet container
          console.log("addedNode", addedNode.nodeName, addedNode);

          // Search for stats container in the bottom of a tweet
          const statsContainer = (addedNode as Element).querySelector(
            tweetStatsContainerQuerySelector
          );
          // If this is a stats container
          if (statsContainer != null) {
            // This is a stats container
            console.log("Veritas Network: found stats container.");

            var statsContainerClone = statsContainer.cloneNode();

            const createVotionOption = (votePercentage: number) => {
              let votingOption = document.createElement("div");
              votingOption.className = "voting-option";
              votingOption.textContent = `${votePercentage}%`;
              return votingOption;
            };

            let votingOptionMajority = createVotionOption(75);
            statsContainerClone.appendChild(votingOptionMajority);
            let votingOptionMinority = createVotionOption(25);
            statsContainerClone.appendChild(votingOptionMinority);

            if (statsContainer.parentElement != null) {
              statsContainer.parentElement.appendChild(statsContainerClone);
            } else
              console.log(
                "Veritas Network: statsContainer.parentElemenet is null."
              );
          } else {
            console.log(
              "Veritas Network: unable to find stats container in tweet container."
            );
          }
        }

        return;
      }
    }
  });

  observer.observe(document, { childList: true, subtree: true });
};
