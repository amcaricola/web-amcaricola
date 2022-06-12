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
async function webLoader (){
    try{
        objetoWeb.header = await checkApi("../header.html")
        .then(data => {return data})
        objetoWeb.proyectos = await checkApi("../b-Proyectos.html")
        .then(data => {return data})
        objetoWeb.footer = await checkApi("../footer.html") 
        .then(data => {return data})
            
        $header.innerHTML = objetoWeb.header
        $section.innerHTML =   objetoWeb.proyectos
        $footer.innerHTML = objetoWeb.footer
    
        $sobreMiNav = document.querySelector("#sobreMiNav")
        $proyectoNav = document.querySelector("#proyectoNav")
        $contactoNav = document.querySelector("#contactoNav")
    
        $proyectoNav.style["font-weight"] = "bold"
        
    }catch (err){ console.log("hubo un error cargando la pagina!3")}
    
    }
    
    webLoader()





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

