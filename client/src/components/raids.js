import React from "react";
import Collapsible from 'react-collapsible';
import { FaLink } from 'react-icons/fa';

export default function Raids() {

    // REAL API
    const [raids, setRaids] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/raids")
          .then((res) => res.json())
          .then((data) => setRaids(atob(JSON.parse(data).content)));
    }, []);

    var parsed_raids = JSON.parse(raids);
    
    var onestar = [];
    var threestar = [];
    var fivestar = [];
    var mega = [];

    if (parsed_raids !== null && parsed_raids !== undefined) {
        parsed_raids.forEach(raid => {
            if (raid.tier.includes("1")) {
                onestar.push(<li>{raid.name}</li>);
            } else if (raid.tier.includes("3")) {
                threestar.push(<li>{raid.name}</li>);
            } else if (raid.tier.includes("5")) {
                fivestar.push(<li>{raid.name}</li>);
            } else /*if (raid.tier.includes("mega"))*/ {
                mega.push(<li>{raid.name}</li>);
            }
        });
    }

    var onestar_element = <div><h4>Tier 1</h4><ul>{onestar}</ul></div>;
    var threestar_element = <div><h4>Tier 3</h4><ul>{threestar}</ul></div>;
    var fivestar_element = <div><h4>Tier 5</h4><ul>{fivestar}</ul></div>;
    var mega_element = <div><h4>Mega/Primal</h4><ul>{mega}</ul></div>;

    const columns = 
        <div class="section-container">
            <Collapsible trigger="Collapse &#9660;" open={true}>
                <h3>Raids <a target="_blank" href="https://leekduck.com/boss/"><FaLink/></a></h3>    
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
                    <div>{onestar_element}</div>
                    <div>{threestar_element}</div>
                    <div>{fivestar_element}</div>
                    <div>{mega_element}</div>
                </div>
            </Collapsible>
        </div>;

    return columns;
}