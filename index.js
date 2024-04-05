var moon;
var wrapper;

function declare(){
    moon=document.querySelector(".moon");
 wrapper=document.querySelector(".wrapper");
}

const main=document.querySelector("main");
declare();

let dark=false;
function moonAnimation(){

    dark=!false;
    let clone=wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy")
    main.appendChild(clone);
    // clone.classList.remove("copy")
    clone.addEventListener("animationend",() =>{
        wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });
}

function events(){
moon.addEventListener("click", moonAnimation);

}
events();