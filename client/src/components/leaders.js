import React from "react";
import Collapsible from 'react-collapsible';
import { FaLink } from 'react-icons/fa';

export default function Leaders() {

    // REAL API
    const [leaders, setLeaders] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/leaders")
          .then((res) => res.json())
          .then((data) => setLeaders(Object.values(data)));
    }, []);

    if (leaders !== null) {
        var arlo = leaders[0];
        var cliff = leaders[1];
        var sierra = leaders[2];

        var arlo_element = 
            <div>
                <h4>Arlo</h4>
                <ul>{arlo.firstMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
                <ul>{arlo.secondMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
                <ul>{arlo.thirdMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
            </div>;
        var cliff_element = 
            <div>
                <h4>Cliff</h4>
                <ul>{cliff.firstMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
                <ul>{cliff.secondMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
                <ul>{cliff.thirdMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
            </div>;
        var sierra_element = 
            <div>
                <h4>Sierra</h4>
                <ul>{sierra.firstMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
                <ul>{sierra.secondMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
                <ul>{sierra.thirdMons.map(mon => <li key={mon}>{mon}</li>)}</ul>
            </div>;

        const columns = 
            <div class="section-container">
                <Collapsible trigger="Collapse &#9660;" open={true}>
                    <h3>Rocket GO Leaders <a target="_blank" href="https://pokemongo.fandom.com/wiki/Team_GO_Rocket_Leaders"><FaLink/></a></h3>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <div>{arlo_element}</div>
                        <div>{cliff_element}</div>
                        <div>{sierra_element}</div>
                    </div>
                </Collapsible>
            </div>;

        return columns;
    }
}