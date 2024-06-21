function toggleFilter(id="harry") {
    let ele=document.getElementById(id);

    if (ele.classList.contains("togray")) {
        ele.classList.remove("togray");
        toggleCat(id);
    } else {
        ele.classList.add("togray");
        toggleCat(id);
    }
    
}


function toggleCat(id) {
    let cat=-1;
    if (id=="harry") {
        cat=0;
    } 
    if (id=="molly") {
        cat=1;
    } 

    let catid=[1,1,1,0,2,1,1,1,1,2,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,2,0,2,2,2,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,2,0,0,1,1,0,0,1,1,1,0,1,2,1,1];
    for (let i=0;i<catid.length;i++) {
        if (cat == catid[i]) {
            document.getElementById(`cat${i}`).classList.toggle("hide");
        }
    }
}