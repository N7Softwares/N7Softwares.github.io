/*--------------Barra de Navegacion--------------*/
const menu = document.getElementById("navbar");
// ----- Almacenar todos los items del navbar -----
const itemsMenu = document.querySelectorAll(".nav-link");

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
    const clientes = document.getElementById("clientes");

    let posicionInicio=inicio.getBoundingClientRect().top;
    let posicionServicios=servicios.getBoundingClientRect().top;
    let posicionGaleria=galeria.getBoundingClientRect().top;
    let posicionAcerca=acerca.getBoundingClientRect().top;
    let posicionIntegrantes=integrantes.getBoundingClientRect().top;
    let posicionPreguntas=preguntas.getBoundingClientRect().top;
    let posicionContact=contacto.getBoundingClientRect().top;
    let posicionClientes=clientes.getBoundingClientRect().top;

    let secciones=[posicionInicio, posicionServicios, posicionClientes, posicionGaleria, posicionAcerca, posicionIntegrantes, posicionPreguntas, posicionContact];

    for(let i=0; i<secciones.length; i++){
        if(secciones[i]<(tamanoDePantalla/4) && secciones[i+1]>(tamanoDePantalla/4)){
            itemsMenu[i].classList.add("active-item");
        }else{
            itemsMenu[i].classList.remove("active-item");
        }
        if(secciones[secciones.length - 1]<(tamanoDePantalla/4)){
            itemsMenu[itemsMenu.length - 1].classList.add("active-item");
        }else{
            itemsMenu[itemsMenu.length - 1].classList.remove("active-item");
        }
    }
}
