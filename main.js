let enlacesHeader = document.querySelectorAll(".menu")[0];
let bandera=true;
let nav=document.getElementById('nav-bar');

document.querySelectorAll(".hamburguesa")[0].addEventListener("click", function(){
    if(bandera){
        document.querySelectorAll(".hamburguesa")[0].style.color ="#fff";
        bandera= false;
    }else{
        document.querySelectorAll(".hamburguesa")[0].style.color ="#000";
        bandera= true;
    }

    enlacesHeader.classList.toggle("menu-dos")
});
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    menu();
    
});
window.addEventListener('load', function(){
    menu();
})
function menu(){
    let desplazamiento= window.pageYOffset;
    if(desplazamiento <=300){
        nav.classList.remove('nav-bar2');
        nav.className=('nav-bar1');
        nav.style.transition='1s';
    }else{
        nav.classList.remove('nav-bar1');
        nav.className=('nav-bar2');
        nav.style.transition='1s';
    }
}