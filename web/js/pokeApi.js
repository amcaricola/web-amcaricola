import {checkApi} from './checkApi.js';

let check = checkApi;


// Definicion de variables del Dom utilizadas

const imagenpk = document.getElementById("pokemonImg")
const nombre =  document.getElementById("pokemonName")
const id =  document.getElementById("pokemonId")
const alto = document.getElementById("pokemonHeight")
const peso =  document.getElementById("pokemonWeight")
const tipo1 = document.getElementById("pokemonTipe1")
const tipo2 = document.getElementById("pokemonTipe2")
const pokeHp = document.getElementById("pokemonHP")
const pokeAtk = document.getElementById("pokemonAtk")
const pokeDef = document.getElementById("pokemonDef")
const PokeSAtk = document.getElementById("pokemonSAtk")
const pokeSDef = document.getElementById("pokemonSDef")
const pokeSpeed = document.getElementById("pokemonSpeed")


// Definicion de Botton y de su accion.

const buttonPokemon =  document.getElementById("pokemonButton")

buttonPokemon.onclick = () => {

    let pokemonName = document.getElementById("pokemonIDname");
    let name = pokemonName.value || "pikachu";
    let api_url =  "https://pokeapi.co/api/v2/pokemon/"
    let fullUrl = api_url + name.toLowerCase() +"/"


    check(fullUrl)
        .then(data => {
            console.log(data)


            nombre.innerText = data.name
            id.innerText = data.id
            alto.innerText = data.height
            peso.innerText = data.weight

            
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

            let imgPk = data.sprites.other["official-artwork"].front_default
            console.log(imgPk)

            imagenpk.src = imgPk 


        })
        .catch(err => err)
}

