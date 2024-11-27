//Ecrivez un programme qui prend une phrase et génère une liste de mots uniques en utilisant un boucle
//si la phrase est "le chien et le chat et le chien"
//le programme doit retourner le  chien et le chat
const phrase = "Alexou est un grand Alexou";

function GenererListeMotsUniques(phrase) {
    const mots = phrase.split(" ");
    const motsUniques = [];
    for (let i = 0; i < mots.length; i++) {
        if (!motsUniques.includes(mots[i])) {
            motsUniques.push(mots[i]);
        }
    }
    console.log(motsUniques);
}
GenererListeMotsUniques(phrase);