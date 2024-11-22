let animal = "kaki";

function switchAnimal(animal){
    switch(animal){
        case "chien":
            console.log("Ceci est un chien");
            break;
        case "chat":
            console.log("Ceci est un chat");
            break;
        case "oiseau":
            console.log("Ceci est un zozio");
            break;
        case "alexou":
            console.log("Kakou Kakou C'est Alexou");
            break
        default:
            console.log("C'est quoi???");
    }
}

switchAnimal(animal);