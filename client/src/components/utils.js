export function formatName(name) {
    let formattedName = name;    
    formattedName = formattedName.toLowerCase();
    formattedName = formattedName.replace("mega", "");
    formattedName = formattedName.replace("shadow", "");
    formattedName = formattedName.replace("primal", "");
    formattedName = formattedName.replace("hisuian", "");
    formattedName = formattedName.replace("galarian", "");
    formattedName = formattedName.replace("alolan", "");
    formattedName = formattedName.replace(".", "-");
    formattedName = formattedName.replace("'", "");
    formattedName = formattedName.replace(/\s/g,'');
    formattedName = formattedName.replace(/ *\([^)]*\) */g, "");
    formattedName = formattedName.replace("mimejr-", "mime-jr");

    if (formattedName.includes("unown")) {
        // fiddle with the request
        formattedName = "unown";
    }
    
    return formattedName;
};