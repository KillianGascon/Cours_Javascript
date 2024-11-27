// Écrivez un programme qui prend une liste de nombres, trouve tous les nombres impairs, calcule leur carré, et afche le résultat
// sous forme de liste.
//     Exemple: Si le tableau de départ est: [2, 5, 8, 11, 14, 17, 20] le programme devra afcher
//     [25, 121, 289]
// (5 au carré, 11 au carré et 17 au carré)


function findOddSquares(numbers) {
    return numbers.filter(num => num % 2 !== 0).map(num => num * num);
}

const numbers = [2, 5, 8, 11, 14, 17, 20];
console.log(findOddSquares(numbers)); // [25, 121, 289]