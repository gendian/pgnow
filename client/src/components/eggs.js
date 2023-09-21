import React from "react";
import Collapsible from 'react-collapsible';
import { FaLink } from 'react-icons/fa';

export default function Eggs() {

    // REAL API
    const [eggs, setEggs] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/eggs")
          .then((res) => res.json())
          .then((data) => setEggs(atob(JSON.parse(data).content)));
    }, []);
    
    var twok = [];
    var fivek = [];
    var sevenk = [];
    var tenk = [];
    var twelvek = [];

    var parsed_eggs = JSON.parse(eggs);
    if (parsed_eggs !== null && parsed_eggs !== undefined) {
        parsed_eggs.forEach(egg => {
            if (egg.eggType.includes("12")) {
                twok.push(<li>{egg.name}</li>);
            } else if (egg.eggType.includes("5")) {
                fivek.push(<li>{egg.name}</li>);
            } else if (egg.eggType.includes("7")) {
                sevenk.push(<li>{egg.name}</li>);
            } else if (egg.eggType.includes("10")) {
                tenk.push(<li>{egg.name}</li>);
            } else {
                twelvek.push(<li>{egg.name}</li>);
            }
        });
    }

    var twok_element = <div><h4>2km</h4><ul>{twok}</ul></div>;
    var fivek_element = <div><h4>5km</h4><ul>5km{fivek}</ul></div>;
    var sevenk_element = <div><h4>7km</h4><ul>7km{sevenk}</ul></div>;
    var tenk_element = <div><h4>10km</h4><ul>10km{tenk}</ul></div>;
    var twelvek_element = <div><h4>12km</h4><ul>12km{twelvek}</ul></div>;

    const columns = 
        <div class="section-container">
            <Collapsible trigger="Collapse &#9660;" open={true}>
                <h3>Eggs <a target="_blank" href="https://leekduck.com/eggs/"><FaLink/></a></h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridGap: 20 }}>
                    <div>{twok_element}</div>
                    <div>{fivek_element}</div>
                    <div>{sevenk_element}</div>
                    <div>{tenk_element}</div>
                    <div>{twelvek_element}</div>
                </div>
            </Collapsible>
        </div>

    return columns;

}