function App() {
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: "π½",
      displayName: "γγγγε€ͺι",
      accountName: "morokoshi",
      content: "δ»ζ₯γ1ζ₯γγγγγγγΎγ",
    },
    {
      id: 1,
      icon: "π¦",
      displayName: "γ¨γγγ³γΉ",
      accountName: "evidence",
      content: "γγ«γΏγγγΉγγ",
    },
  ]);

  const addTweet = React.useCallback(
    (tweet) => setTweets((prev) => [tweet, ...prev]),
    [setTweets]
  );

  return (
    <div>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </div>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);
