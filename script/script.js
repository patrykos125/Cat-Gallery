
const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");


const POPUP_IMG = document.querySelector(".popup__img");
const POPUP_ARROW_LEFT=document.querySelector(".popup__arrow--left");
const POPUP_ARROW_RIGHT=document.querySelector(".popup__arrow--right");

let currentImgIndex;


THUMBNAILS.forEach((x,index)=> {
    function showPopup(e){
        POPUP.classList.remove("hidden");
        POPUP_IMG.src=e.target.src;
        currentImgIndex =index;
        THUMBNAILS.forEach((element)=>{
            element.setAttribute("tabindex","-1");
        })

    }

    x.addEventListener("click",showPopup);

    x.addEventListener("keydown",(e)=>{

        if(e.key==="Enter"){
            showPopup(e);
        }

    })

});







POPUP_ARROW_LEFT.addEventListener("click",preewiuslyPicture);
POPUP_ARROW_RIGHT.addEventListener("click",nextPicture);



document.addEventListener("keydown",(e)=>{

    if(!POPUP.classList.contains("hiden")) {
        if (e.key === "ArrowRight") {
            nextPicture();
        }
        if (e.key === "ArrowLeft") {
            preewiuslyPicture();
        }
        if (e.key === "Escape") {
            hidePicture();
        }
    }
})

function preewiuslyPicture(){
    currentImgIndex--;
    if(currentImgIndex<0){
        currentImgIndex=THUMBNAILS.length-1;
    }
    POPUP_IMG.src= THUMBNAILS[currentImgIndex].src;

}
function nextPicture(){
    currentImgIndex++
    if(currentImgIndex>=THUMBNAILS.length) {
        currentImgIndex=0;
    }
    POPUP_IMG.src= THUMBNAILS[currentImgIndex].src;
}
function hidePicture(){
    POPUP.classList.add("fade-out");
    setTimeout(()=>{ POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
        },300)
    THUMBNAILS.forEach((element)=>{
        element.setAttribute("tabindex","0");
    })



}

POPUP.addEventListener("click",(e)=>{
    if(e.target===POPUP){
        hidePicture();

    }
})





