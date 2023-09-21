import React from "react";
import GraphicContainer from "./atomic/graphicContainer";

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

    const research_element = 
    <div>
        <GraphicContainer textToShow="Catch">
            <ul>{catchList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Throw">
            <ul>{throwList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Interact">
            <ul>{interactList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Explore">
            <ul>{exploreList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Misc.">
            <ul>{otherList}</ul>
        </GraphicContainer>
    </div>;

    return research_element;
}