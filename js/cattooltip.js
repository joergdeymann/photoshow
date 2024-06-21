function getCatInfo(id) {
    html=/*html*/`
    <div class="imgtext">
        <img class="profile-img" src="${catlist[id]["img"]}" alt="${[catlist[id]["catname"]]}">
        <h1>${[catlist[id]["catname"]]}</h1>
    </div>
    <p>${[catlist[id]["text"]]}</p>
`;
    return html;
}

function toggleCatInfo(catname,state) {
    let html=``;
    let id=0;
    if (catname == "harry") id=0;
    if (catname == "molly") id=1;
    
    document.getElementById('cat-tooltip').innerHTML=getCatInfo(id);

    if (state == null) {
        document.getElementById("overlay-cat-container").classList.toggle("hide");
    } else 
    if (state == 0) {
        if (!document.getElementById("overlay-cat-container").classList.contains("hide")) {
            document.getElementById("overlay-cat-container").classList.add("hide");
        }
    } else {
        document.getElementById("overlay-cat-container").classList.remove("hide");

    }    
}
