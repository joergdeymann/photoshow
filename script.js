let images = [];
let imageId=0;


function init() {
    init_img();
    render();
    document.getElementById("overlay-container").addEventListener("click",closeImg);
    document.getElementById("overlay-content").addEventListener("click",doNothing);
    
}


function init_img() {
    for (let i=65;i<128;i++) {
        let str=`./img/file`;
        if (i<100) str += "0";
        str += i + ".JPG";
        images.push(str);
    }
}


function render() {
    let html=/*html*/  `
    `

    for (let i=0;i<images.length;i++) {
        html += `
        <img id="cat${i}" onclick="showBigImageAnimate(${i})" class="small-img" src="${images[i]}" alt="img${i}">
        `
    }
    document.getElementById('content').innerHTML=html;
}


function showBigImage(i) {
    imageId = i;
    document.getElementById('big-image').src=`${images[i]}`;
    document.getElementById('overlay-container').classList.remove('invisible');
    //## document.getElementById('content').classList.add('hide');
}

function showBigImageAnimate(i) {
    showBigImage(i);
    animateResize();
    
}


function closeImg(e) {
    animateResizeReverse();
    document.getElementById("overlay-container").classList.add("invisible");
    //## document.getElementById("content").classList.remove("hide");

    if (e) {
       e.stopPropagation();
    }
}


function doNothing(e) {
    e.stopPropagation();
}






/*
    Arows 
*/
function toggleArrows() {
    document.getElementById("left-arrow").classList.toggle("hide");
    document.getElementById("right-arrow").classList.toggle("hide");
    
}


