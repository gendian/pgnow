import React from "react";
import GraphicContainer from "./atomic/graphicContainer";

export default function Researches() {

    // REAL API
    const [researches, setResearches] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/researches")
          .then((res) => res.json())
          .then((data) => setResearches(data));
    }, []);

    var catchList = [];
    var throwList = [];
    var interactList = [];
    var exploreList = [];
    var otherList = [];

    if (researches !== null && researches !== undefined) {
        var count = 0;
        researches.forEach(research => {
            var rewards = research.rewards;
            const researchLi = 
                <li key={"research-"+count}>
                    <b>{research.text.replace("Ã©", "é")}</b> -  
                    {rewards.map((reward, i, rewards) => 
                        {
                            if (rewards.length === 1) {
                                return " " + reward.name;
                            } else if (i + 1 === rewards.length) {
                                return reward.name;
                            } else if (i === 0) {
                                return " " + reward.name + ", ";
                            } else {
                                return reward.name + ", "
                            }  
                        }                      
                    )}
                </li>
            if (research.text.includes("Catch") || research.text.includes("Berries")) {
                catchList.push(researchLi);
            } else if (research.text.includes("Throw")) {
                throwList.push(researchLi);
            } else if (research.text.includes("raid") || research.text.includes("Spin") || research.text.includes("Rocket")) {
                interactList.push(researchLi);
            } else if (research.text.includes("Hatch") || research.text.includes("Take") || research.text.includes("Candies") || research.text.includes("Explore")) {
                exploreList.push(researchLi);
            } else {                
                otherList.push(researchLi);
            }
            count++;
        });
    }    

    const research_element = 
    <div>
        <GraphicContainer textToShow="Catch" iconToShow="research">
            <ul>{catchList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Throw" iconToShow="research">
            <ul>{throwList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Interact" iconToShow="research">
            <ul>{interactList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Explore" iconToShow="research">
            <ul>{exploreList}</ul>
        </GraphicContainer>
        <GraphicContainer textToShow="Misc." iconToShow="research">
            <ul>{otherList}</ul>
        </GraphicContainer>
    </div>;

    return research_element;
}