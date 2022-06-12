import { checkApi } from "./checkApi.js"



export const objetoWeb = {
    header: "", //carga al inicio 
    proyectos:"", // carga al inicio
    sobreMi:"",
    contacto:"",
    pokemonApi:"",
    footer: "", // carga al inicio
}

checkApi("../b-SobreMi.html").then(data => objetoWeb.sobreMi = data)
checkApi("../b-Contacto.html").then(data => objetoWeb.contacto = data)
checkApi("../b-PokemonApi.html").then(data => objetoWeb.pokemonApi = data)














