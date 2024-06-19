function toggleCatInfo(catname,state) {
    let html=``;
    if (catname == "harry") {

        html=/*html*/`
            <div class="imgtext">
                <img class="profile-img" src="./img/harry.jpg" alt="Harry">
                <h1>Harry</h1>
            </div>
            <p>Harry ist ein gemütlicher Kater, der gerne Nachts auf Tour geht. Wenn er zuhause ist möchte er gerne an seinem 
                Bauch und dem Kopf gestreichelt werden. Wenn Harry will, kann er auch sehr melodisch sein.  Sein Name hat er aus "Harry Potter".</p>
        `        
    }
    if (catname == "molly") {

        html=/*html*/`
            <div class="imgtext">
                <img class="profile-img" src="./img/molly.jpg" alt="Molly">
                <h1>Molly</h1>
            </div>
            <p>Molly ist eine sehr aktive weibliche Katze, spielt gerne mit Blättern. Sie lässt sich nur selten auf die Arme nehmen, und wenn dann ganz kurz. Sie mag lieber am Boden gestreichelt werden, und fordert, daß man mit ihr spielt.
                Sie hat ihren Namen aus "Harry Potter".</p>
        `        
    }
    document.getElementById('cat-tooltip').innerHTML=html;

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
    
    // document.getElementById("overlay-cat-container").classList.toggle("hide");
    
}
