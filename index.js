const header = document.getElementById('header');
const iconMenu = document.getElementById('icon-menu');
const mobile = window.matchMedia('screen and (max-width: 570px)');

mobile.addEventListener('change', validation);

validation(mobile);

function validation(event){
    if(event.matches){
        ActivarMobile();
    }else{
        DesactivarMobile();
    }
}
function ActivarMobile(){
    if(iconMenu.classList.contains('desactivated')){
        iconMenu.classList.remove('desactivated');
    }
    iconMenu.addEventListener('click', debugMenu);
}
function DesactivarMobile(){
    if(!iconMenu.classList.contains('desactivated')){
        iconMenu.classList.add('desactivated');
    }
    iconMenu.removeEventListener('click', debugMenu);
}

function debugMenu(){
    if(header.classList.contains('activated')){
        header.classList.remove('activated');
    }else{
        header.classList.add('activated');
    }
}