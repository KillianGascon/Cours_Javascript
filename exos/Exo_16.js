// Ecrire une fonction qui prend un tableau de nombres et applique une fonction de transformation à chaque élément du tableau
// Ecrire minimum deux fonctions de transformations
// Exemple:
//     console.log(transformerTableau([2, 4, 6], carre)); // Af che [4, 16, 36]


const tableau = [2, 4, 6];

function transformerTableau(tableau, transformation) {
    let newTableau = [];
    for (let i = 0; i < tableau.length; i++) {
        newTableau.push(transformation(tableau[i]));
    }
    return newTableau;
}

function carre(nombre) {
    return nombre * nombre;
}

function cube(nombre) {
    return nombre * nombre * nombre;
}

console.log(transformerTableau(tableau, carre));
console.log(transformerTableau(tableau, cube));

