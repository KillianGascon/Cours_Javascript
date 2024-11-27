// Définition de la variable person
const person = {nom: 'Jinx', age: 18, ville: 'Zaun'};

// Boucle for in pour parcourir les propriétés de l'objet person
for (let key in person) {
    // Affichage de la clé et de la valeur de chaque propriété
  console.log(key, person[key]);
}

// Affichage du type de la variable person
console.log(typeof person);