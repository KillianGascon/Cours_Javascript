// Ecrire une fonction qui prend en argument un tableau de nombres, et une fonction de tri pour décider de comment trier les
// éléments. Ecrire deux fonctions de tri et les passer en execution
// Exemple
// console.log(trierTableau([5, 3, 8, 1], triCroissant)); // Af che [1, 3, 5, 8]
// Info optionnel: La méthode .sort() des array prend en argument un comparateur qui est une fonction

const tableau = [5, 3, 8, 1];

function TriTableau(tableau, tri) {
    return tableau.sort(tri);
}

function TriCroissant(a, b) {
    return a - b;
}

function TriDecroissant(a, b) {
    return b - a;
}

console.log(TriTableau(tableau, TriCroissant));
console.log(TriTableau(tableau, TriDecroissant));