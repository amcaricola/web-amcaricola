//importacion de variables HTML

import { objetoWeb } from "./objetoWeb.js";
import {checkApi} from "./checkApi.js"


//Declaracion de variables

let $footer = document.querySelector("#footer-autoconstructor")
let $section = document.querySelector("#section-autoconstructor")
let $header = document.querySelector("#header-autoconstructor")
let $divScript = document.querySelector("#div-script")
// pre-carga de variables del nav
let $proyectoNav;
let $sobreMiNav;
let $contactoNav;



// Carga inicial de la pagina  

//CARGA DEL HEADER
checkApi("../header.html")
.then(data =>  {
    objetoWeb.header = data
    $header.innerHTML = objetoWeb.header
    $sobreMiNav = document.querySelector("#sobreMiNav")
    $proyectoNav = document.querySelector("#proyectoNav")
    $contactoNav = document.querySelector("#contactoNav")

    $proyectoNav.style["font-weight"] = "bold"

    return checkApi("../b-Proyectos.html")
}) 


        //CARGA LA PRIMERA VISTA - PROYECTOS
.then(data =>{
    objetoWeb.proyectos = data
    $section.innerHTML =   objetoWeb.proyectos
    return checkApi("../footer.html")  
} )


        //CARGA DEL FOOTER
.then(data =>  {
    objetoWeb.footer = data
    $footer.innerHTML = objetoWeb.footer
})  





// indexConstructor.innerHTML = proyecto

//Funcion modificadora del body
export const cambioBodyHtml = (pagina, variable = false) => {  
    
    $proyectoNav.style["font-weight"] = "normal"
    $sobreMiNav.style["font-weight"] = "normal"
    $contactoNav.style["font-weight"] = "normal"
  

    $section.innerHTML = pagina || "<p> pagina </p>" 
    if (variable){variable.style["font-weight"] = "bold"}

};


// CAMBIOS DEL NAV

export const doc = window.document
doc.addEventListener("click", (e) => {

    if (e.target.matches("#sobreMiNav")){
        // scriptApi()
        cambioBodyHtml(objetoWeb.sobreMi, $sobreMiNav)
    }
    if (e.target.matches("#proyectoNav")){
        // scriptApi()
        cambioBodyHtml(objetoWeb.proyectos, $proyectoNav)
    }
    if (e.target.matches("#contactoNav")){
        // scriptApi()
        cambioBodyHtml(objetoWeb.contacto, $contactoNav)
    }

}) 

