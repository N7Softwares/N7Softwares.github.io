/*--------------Barra de Navegacion--------------*/
const menu = document.getElementById("navbar");
const itemInicio = document.getElementById("itemInicio");
const itemServicios = document.getElementById("itemServicios");
const itemGaleria = document.getElementById("itemGaleria");
const itemAbout= document.getElementById("itemAcercaDe");
const itemIntegrantes= document.getElementById("itemIntegrantes");
const itemPreguntas= document.getElementById("itemPreguntas");
const itemContact = document.getElementById("itemContacto");

// console.log(menu);

/*-------------- Galeria --------------*/
// gallery-item
// const galeryAHref = document.querySelector(".gallery-caption");
// console.log(galeryAHref);

// const aHref=galeryItem.firstChild.nextElementSibling;
// console.log(aHref);

// galeryAHref.forEach(function(galeryAHref) {
//     console.log(galeryAHref);
// });



addEventListener("scroll",()=>{
        
    // Para activar los items del menu
    let tamanoDePantalla=window.innerHeight;
    activarItemsMenu(tamanoDePantalla);

})


const activarItemsMenu = (tamanoDePantalla)=>{
    const inicio = document.getElementById("home");
    const servicios = document.getElementById("servicios");
    const galeria = document.getElementById("galeria");
    const acerca = document.getElementById("acerca");
    const integrantes = document.getElementById("equipo");
    const preguntas = document.getElementById("preguntas");
    const contacto = document.getElementById("contacto");



    let posicionInicio=inicio.getBoundingClientRect().top;
    let posicionServicios=servicios.getBoundingClientRect().top;
    let posicionGaleria=galeria.getBoundingClientRect().top;
    let posicionAcerca=acerca.getBoundingClientRect().top;
    let posicionIntegrantes=integrantes.getBoundingClientRect().top;
    let posicionPreguntas=preguntas.getBoundingClientRect().top;
    let posicionContact=contacto.getBoundingClientRect().top;


    if(posicionInicio<(tamanoDePantalla/3) && posicionServicios>(tamanoDePantalla/3.2)){
        itemInicio.classList.add("active-item");
    }else{
        itemInicio.classList.remove("active-item");

    }
    if(posicionServicios<(tamanoDePantalla/3.2) && posicionGaleria>(tamanoDePantalla/5)){
        itemServicios.classList.add("active-item");
    }else{
        itemServicios.classList.remove("active-item");
        
    }
    if(posicionGaleria<(tamanoDePantalla/5) && posicionAcerca>(tamanoDePantalla/3.2)){
        itemGaleria.classList.add("active-item");
    }else{
        itemGaleria.classList.remove("active-item");
    }
    if(posicionAcerca<(tamanoDePantalla/3.2) && posicionIntegrantes>(tamanoDePantalla/5)){
        itemAbout.classList.add("active-item");
    }else{
        itemAbout.classList.remove("active-item");
    }
    if(posicionIntegrantes<(tamanoDePantalla/5) && posicionPreguntas>(tamanoDePantalla/5)){
        itemIntegrantes.classList.add("active-item");
    }else{
        itemIntegrantes.classList.remove("active-item");
    }
    if(posicionPreguntas<(tamanoDePantalla/5) && posicionContact>(tamanoDePantalla/5)){
        itemPreguntas.classList.add("active-item");
    }else{
        itemPreguntas.classList.remove("active-item");
    }
    if(posicionContact<(tamanoDePantalla/5)){
        itemContact.classList.add("active-item");
    }else{
        itemContact.classList.remove("active-item");
    }
}
