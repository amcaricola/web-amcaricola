import {checkApi} from './checkApi.js';
import {doc,cambioBodyHtml} from './index.js';
import {objetoWeb} from "./objetoWeb.js"

let check = checkApi;

// // Declaracion e variables del Dom utilizadas
let pokemonName;
let imagenpk ;
let imagenpkHolder;
let nombre ;
let id ;
let alto ;
let peso ;
let tipo1 ;
let tipo2 ;
let pokeHp;
let pokeAtk ;
let pokeDef ;
let PokeSAtk ;
let pokeSDef ;
let pokeSpeed ;

//ejecucion del boton 

doc.addEventListener("click", (e) => {

    if (e.target.matches("#PokemonApiWeb")){
        cambioBodyHtml(objetoWeb.pokemonApi)

        pokemonName = document.getElementById("pokemonIDname")
        imagenpk = document.getElementById("pokemonImg")
        imagenpkHolder = document.getElementById("pokemonImg-placeholder")
        nombre =  document.getElementById("pokemonName")
        id =  document.getElementById("pokemonId")
        alto = document.getElementById("pokemonHeight")
        peso =  document.getElementById("pokemonWeight")
        tipo1 = document.getElementById("pokemonTipe1")
        tipo2 = document.getElementById("pokemonTipe2")
        pokeHp = document.getElementById("pokemonHP")
        pokeAtk = document.getElementById("pokemonAtk")
        pokeDef = document.getElementById("pokemonDef")
        PokeSAtk = document.getElementById("pokemonSAtk")
        pokeSDef = document.getElementById("pokemonSDef")
        pokeSpeed = document.getElementById("pokemonSpeed")

    }

    if (e.target.matches("#pokemonButton")){
        buscarPokemon()
    }


    if (e.target.matches('#resultadoBusqueda li')){

        document.querySelector("#pokemonIDname").value = e.target.textContent
        document.querySelector("#resultadoBusqueda").innerHTML = ""
        buscarPokemon();
    }

    

}) 





// Definicion de variable, array de nombres de pokemon para el buscador


let pokemonsNamesArray = [];

check("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0", true)
    .then(data => {
        data.results.forEach(item => 
            pokemonsNamesArray.push(item.name)
        )
            
    })
    .catch(err => err)


        
// buscador automatico 


doc.addEventListener("keyup", (e) =>{
    if (e.target.matches("#pokemonIDname")){
    document.querySelector('#resultadoBusqueda').innerHTML = ""
    let resultadosNombres = []
    if(e.target.value === ""){
        return 
    } 
    for (let name of pokemonsNamesArray){
        if (name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1){
            resultadosNombres.push(name)
        }
    };
    for (let i = 0; i < 10; i ++ ){
        if(resultadosNombres[i] === undefined){
            return 
        } 
        if (e.target.value === resultadosNombres[i]){
            return
        }
        document.querySelector('#resultadoBusqueda').innerHTML += `<li>${resultadosNombres[i]}</li>`
    };
    }
})


// //Evento de click del buscador

// pokemonResultado.addEventListener("click", (e) => {

// })


// // Funcion Buscadora

const buscarPokemon = () => {
    
    let name = pokemonName.value || "pikachu";
    let api_url =  "https://pokeapi.co/api/v2/pokemon/"
    let fullUrl = api_url + name.toLowerCase() +"/"
    
    imagenpk.style.display = "none";
    imagenpkHolder.style.display = "inline";
    
    check(fullUrl, true)
    .then(data => {
        
        
            let imgPk = data.sprites.other["official-artwork"].front_default
            imagenpk.src = imgPk 
        
            nombre.innerText = data.name
            id.innerText = data.id
            alto.innerText = `${parseFloat(data.height) / 10} m`
            peso.innerText = `${parseFloat(data.weight) /10} Kg`

            
            let tipos = data.types.map(function(type){  
                return type.type.name
            })
            tipo1.innerText = tipos[0]
            tipo2.innerText = tipos[1] || ""

            let statsbase = data.stats.map(function(stat){
                return stat.base_stat
            })

            pokeHp.innerText = statsbase[0]
            pokeAtk.innerText = statsbase[1]
            pokeDef.innerText = statsbase[2]
            PokeSAtk.innerText = statsbase[3]
            pokeSDef.innerText = statsbase[4]
            pokeSpeed.innerText = statsbase[5]

            imagenpkHolder.style.display = "none";
            imagenpk.style.display = "inline";
            
        })
        .catch(err => err)
        
}





