import React from "react";
import { Tweet } from 'react-tweet';

export default function Tweets() {

    // REAL API
    const [tweets, setTweets] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/tweets")
          .then((res) => res.json())
          .then((data) => setTweets(data));
    }, []);

    var Tweets = [];
    if (tweets !== null && tweets !== undefined) {
        tweets.forEach(tweet => {
            if (tweet !== null && tweet !== undefined && typeof tweet === "number") {
                var ele= 
                    <li id={tweet}>
                        <Tweet id={tweet} />
                    </li>;
                Tweets.push(ele);
            }
        });
    }

    var tweets_result = 
    <div data-theme="dark">
        <ul>
            <li><Tweet id="1717269815780335665"/></li>
            <li><Tweet id="1715412645619097863"/></li>
            <li><Tweet id="1716562956421357778"/></li>
            <li><Tweet id="1714748267076997173"/></li>
        </ul>
    </div>;

    return tweets_result;
}