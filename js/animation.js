function animateResize() {
    document.getElementById("overlay-container").classList.add("animateOpacity");
    document.getElementById("big-image").classList.add("animateResize");
    setTimeout(function () {
        document.getElementById("overlay-container").classList.remove("animateOpacity");
        document.getElementById("big-image").classList.remove("animateResize");
    },400);
}


function animateResizeReverse() {
    document.getElementById("overlay-container").classList.add("animateOpacityReverse");
    document.getElementById("big-image").classList.add("animateResizeReverse");
    setTimeout(function () {
        document.getElementById("overlay-container").classList.remove("animateOpacityReverse");
        document.getElementById("big-image").classList.remove("animateResizeReverse");
        console.log("animateResizeReverse: after Timeout");
    },400);
}


function showNextImage() {
    document.getElementById("big-image").classList.add("slideCenter2Left");
    setTimeout(function () {
        document.getElementById("big-image").classList.remove("slideCenter2Left");


        let emergency=false;
        do {
            imageId++;
            if (imageId >= images.length) {
                imageId=0;
                if (emergency) break;
                emergency=true;
            }
        } while (document.getElementById(`cat${imageId}`).classList.contains("hide"));

        
        document.getElementById("big-image").classList.add("slideRight2Center");
        showBigImage(imageId);
        
        setTimeout(function () {
            document.getElementById("big-image").classList.remove("slideRight2Center");
        },300);
    },300);
}


function showPrevImage() {
    document.getElementById("big-image").classList.add("slideCenter2Right");
    setTimeout(function () {
        document.getElementById("big-image").classList.remove("slideCenter2Right");

        let emergency=false;
        do {
            if (imageId > 0) {
                imageId--;
            } else {
                imageId=images.length-1;
                if (emergency) break;
                emergency=true;
            }
    
        } while (document.getElementById(`cat${imageId}`).classList.contains("hide"));
            
        document.getElementById("big-image").classList.add("slideLeft2Center");
        showBigImage(imageId);
        
        setTimeout(function () {
            document.getElementById("big-image").classList.remove("slideLeft2Center");
        },300);0
    



    },300);
}


function  toggleSize(id) {
    document.get.getElementById(id).classList.add("bigger");
}
