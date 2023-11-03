  
// ALSO ADD TO THE SERVER!! THIS IS A HACK... PLEASE FIX THIS SO WE DON'T NEED TO DO ALL THIS FORMATTING. MAYBE TRY AN ID, GENIUS
export const formatName = (name) => {
    let formattedName = name;
    // format lowercase remove non-alphanumeric
    formattedName = formattedName.toLowerCase();
    formattedName = formattedName.replace("[^a-zA-Z0-9]", "");
    formattedName = formattedName.replace(/(\r\n|\n|\r)/gm, "");
    formattedName = formattedName.replaceAll(" ", "");
    formattedName = formattedName.replaceAll("(", "");
    formattedName = formattedName.replaceAll(")", "");
    formattedName = formattedName.replaceAll("'", "");

    // move mega to the end of the name
    if (formattedName.includes("mega")) {
        if (formattedName.includes("charizard")) {
            if (formattedName.includes("x")) {
                formattedName = "charizard-mega-x";
            } else if (formattedName.includes("y")) {
                formattedName = "charizard-mega-y";
            }
        } else {
            formattedName = formattedName.replace("mega", "");
            formattedName = formattedName.concat("-mega");
        }
    }
    // remove shadow
    if (formattedName.includes("shadow")) {
        formattedName = formattedName.replace("shadow", "");
    }
    // move alola to the end of the name
    if (formattedName.includes("alola")) {
        formattedName = formattedName.replace("alolan", "");
        formattedName = formattedName.concat("-alola");
    }
    // move galar to the end of the name
    if (formattedName.includes("galar")) {
        formattedName = formattedName.replace("galarian", "");
        formattedName = formattedName.concat("-galar");
    }
    // move hisuian to the end of the name
    if (formattedName.includes("hisui")) {
        formattedName = formattedName.replace("hisuian", "");
        formattedName = formattedName.concat("-hisui");
    }
    // move primal to the end of the name
    if (formattedName.includes("primal")) {
        formattedName = formattedName.replace("primal", "");
        formattedName = formattedName.concat("-primal");
    }
    // allow for formes
    if (formattedName.includes("forme")) {
        formattedName = formattedName.replace("therianforme", "-therian");
        formattedName = formattedName.replace("incarnateforme", "-incarnate");
        formattedName = formattedName.replace("skyforme", "-sky");
        formattedName = formattedName.replace("landforme", "-land");
        formattedName = formattedName.replace("alteredforme", "-altered");
        formattedName = formattedName.replace("originforme", "-origin");
        formattedName = formattedName.replace("attackforme", "-attack");
        formattedName = formattedName.replace("normalforme", "-normal");
        formattedName = formattedName.replace("defenseforme", "-defense");
        formattedName = formattedName.replace("speedforme", "-speed");
        formattedName = formattedName.replace("10", "-10");
        formattedName = formattedName.replace("50", "-50");
        formattedName = formattedName.replace("complete", "-complete");
    }
    if (formattedName.includes("cempasúchil")) {
        formattedName = formattedName.replace("cempasúchil", "");
    }    
    if (formattedName.includes("mime") && formattedName.includes("jr")) {
        formattedName = "mime-jr";
    } else if (formattedName.includes("unown")) {
        formattedName = "unown";
    } else if (formattedName.includes("pumpkaboo")) {
        formattedName = "pumpkaboo-average";
    } else if (formattedName.includes("genesect")) {
        formattedName = "genesect";
    }
    
    return formattedName;
}