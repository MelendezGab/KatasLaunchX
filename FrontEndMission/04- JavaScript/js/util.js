window.onload = function () {
    var input = document.getElementById("pokemon_name");
    console.log(input.value);

    input.addEventListener("keyup", function(event){
        if(event.keyCode === 13){
            console.log("Nombre: " + input.value);
            if(input.value != ""){
                get_pokemon_info(input.value.toLowerCase());
            }
            input.value = "";
        }
    });
}
const get_pokemon_info   = (name) =>{
    const url = "https://pokeapi.co/api/v2/pokemon/" + name;
    fetch(url).then((res) => {
        if(res.status != "200"){
            window.alert("Pokemon " + name + " was not found.");
            return 0;
        }else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        poke_img = data.sprites.front_default;
        console.log(poke_img);
        const pokemon_img = document.getElementById("pokemon_img");
        pokemon_img.src = poke_img;

        document.getElementById("type_card_header").innerHTML = "Type:";
        document.getElementById("type_value").innerHTML = data.types[0].type.name;

        document.getElementById("cp_value").innerHTML = data.stats[0].base_stat;
        document.getElementById("speed_value").innerHTML = data.stats[5].base_stat;
        document.getElementById("attack_value").innerHTML = data.stats[1].base_stat;
        document.getElementById("defense_value").innerHTML = data.stats[2].base_stat;
        document.getElementById("sattack_value").innerHTML = data.stats[3].base_stat;
        document.getElementById("sdefense_value").innerHTML = data.stats[4].base_stat;        
    })
}