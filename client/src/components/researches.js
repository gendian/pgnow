import React from "react";
import Collapsible from 'react-collapsible';

export default function Researches() {

    // REAL API
    const [researches, setResearches] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/researches")
          .then((res) => res.json())
          .then((data) => setResearches(atob(JSON.parse(data).content)));
    }, []);

    var catchList = [];
    var throwList = [];
    var interactList = [];
    var exploreList = [];
    var otherList = [];

    var parsed_researches = JSON.parse(researches);
    if (parsed_researches !== null && parsed_researches !== undefined) {
        parsed_researches.forEach(research => {
            if (research.text.includes("Catch") || research.text.includes("Berries")) {
                const researchLi = <li><b>{research.text.replace("Ã©", "é")}</b> - {research.rewards.map(reward => reward.name + " ")}</li>;
                catchList.push(researchLi);
            } else if (research.text.includes("Throw")) {
                const researchLi = <li><b>{research.text.replace("Ã©", "é")}</b> - {research.rewards.map(reward => reward.name + " ")}</li>;
                throwList.push(researchLi);
            } else if (research.text.includes("raid") || research.text.includes("Spin") || research.text.includes("Rocket")) {
                const researchLi = <li><b>{research.text.replace("Ã©", "é")}</b> - {research.rewards.map(reward => reward.name + " ")}</li>;
                interactList.push(researchLi);
            } else if (research.text.includes("Hatch") || research.text.includes("Take") || research.text.includes("Candies") || research.text.includes("Explore")) {
                const researchLi = <li><b>{research.text.replace("Ã©", "é")}</b> - {research.rewards.map(reward => reward.name + " ")}</li>;
                exploreList.push(researchLi);
            } else {
                const researchLi = <li><b>{research.text.replace("Ã©", "é")}</b> - {research.rewards.map(reward => reward.name + " ")}</li>;
                otherList.push(researchLi);
            }
        });
    }
    
    var catch_element = <div><h4>Catch</h4><ul>{catchList}</ul></div>;
    var throw_element = <div><h4>Throw</h4><ul>{throwList}</ul></div>;
    var interact_element = <div><h4>Interact</h4><ul>{interactList}</ul></div>;
    var explore_element = <div><h4>Explore</h4><ul>{exploreList}</ul></div>;
    var other_element = <div><h4>Other</h4><ul>{otherList}</ul></div>;

    const columns = 
        <div class="section-container">
            <Collapsible trigger="Collapse &#9660;" open={true}>
                <h3>Researches</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridGap: 20 }}>
                    <div>{catch_element}</div>        
                    <div>{throw_element}</div>
                    <div>{interact_element}</div>
                    <div>{explore_element}</div>
                    <div>{other_element}</div>
                </div>
            </Collapsible>
        </div>;

    return columns;
}