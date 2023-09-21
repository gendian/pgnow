import React from "react";
import Collapsible from 'react-collapsible';
import { FaLink } from 'react-icons/fa';

export default function ShadowRaids() {

    // REAL API
    const [shadowRaids, setShadowRaids] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/shadow_raids")
          .then((res) => res.json())
          .then((data) => setShadowRaids(Object.values(data)));
    }, []);

    var onestar = [];
    var threestar = [];
    var legendary = [];
    if (shadowRaids !== null && shadowRaids !== undefined) {
        shadowRaids.forEach(shadow_raid => {
            if (shadow_raid.tier.includes("1st")) {
                onestar.push(<li>{shadow_raid.name}</li>);
            } else if (shadow_raid.tier.includes("3rd")) {
                threestar.push(<li>{shadow_raid.name}</li>);
            } else if (shadow_raid.tier.includes("Legendary")) {
                legendary.push(<li>{shadow_raid.name}</li>);
            }
        });
    }

    var onestar_element = <div><h4>Tier 1</h4><ul>{onestar}</ul></div>;
    var threestar_element = <div><h4>Tier 3</h4><ul>{threestar}</ul></div>;
    var legendary_element = <div><h4>Legendary</h4><ul>{legendary}</ul></div>;

    const columns = 
        <div class="section-container">
            <Collapsible trigger="Collapse &#9660;" open={true}>
                <h3>Shadow Raids <a target="_blank" href="https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses"><FaLink/></a></h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                    <div>{onestar_element}</div>
                    <div>{threestar_element}</div>
                    <div>{legendary_element}</div>
                </div>
            </Collapsible>
        </div>;

    return columns;
}