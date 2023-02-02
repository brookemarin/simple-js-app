let pokemonList = [
    {name: "Squirtle", height: .5, types:['water']},
    {name: "Eevee", height: .3, types:['normal']},
    {name: "Jigglypuff", height: .5, types:['fairy','normal']}
]


// for (i = 0;i < pokemonList.length;i++){
//     if(pokemonList[i].height >=.5){
//         document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!</p>") 
//     } else {
//       document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")</p>")
//     }
// }

pokemonList.forEach(pokemon => document.write(pokemon));