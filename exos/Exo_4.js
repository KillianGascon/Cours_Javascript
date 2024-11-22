// // Ecrire une expression qui vérifier si une chaine de caractère n'est ni null, ni vide, ni infinie

chaine_de_caractere = "";

function verifier_chaine(chaine) {
    return chaine !== null && chaine !== "" && chaine !== undefined;
}

console.log(verifier_chaine(chaine_de_caractere));

// let str="";
//
// if (str){
//     console.log("La chaine n'est ni null, ni vide, ni infinie");
// }
// else{
//     console.log("La chaine est null, vide ou infinie");
// }
