//importacion de variables HTML
import { proyecto, sobreMi, contacto } from "./Variables_html.js"


//Declaracion de variables
// DOM

const indexConstructor = document.querySelector('#autoConstruccion')


// HTML NAV 
const proyectoNav = document.querySelector("#proyectoNav")
const sobreMiNav = document.querySelector("#sobreMiNav")
const contactoNav = document.querySelector("#contactoNav")



// Body que carga al inicio 
indexConstructor.innerHTML = proyecto
proyectoNav.style["font-weight"] = "bold"

//Funcion modificadora del body
function cambioBodyHtml(pagina, variable) {  
    
    proyectoNav.style["font-weight"] = "normal"
    sobreMiNav.style["font-weight"] = "normal"
    contactoNav.style["font-weight"] = "normal"
  

    indexConstructor.innerHTML = pagina
    variable.style["font-weight"] = "bold"

};


proyectoNav.addEventListener("click", () => { cambioBodyHtml(proyecto,proyectoNav)})
sobreMiNav.addEventListener("click", () => { cambioBodyHtml(sobreMi,sobreMiNav)})
contactoNav.addEventListener("click", () => { cambioBodyHtml(contacto,contactoNav)})

