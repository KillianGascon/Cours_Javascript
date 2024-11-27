// Écrivez un programme qui prend une phrase et compte le nombre d’occurrences de chaque mot. Le programme doit afcher
// chaque mot unique avec son nombre d’occurrences.
//     Si la phrase est "Le chat mange le poisson et le chat dort", le programme devrait afcher :
//     Le : 2
// chat : 2
// mange : 1
// poisson : 1
// et : 1
// dort : 1

const phrase = "Le chat mange le poisson et le chat dort";

function CompterOccurencesMots(phrase) {
    const mots = phrase.toLowerCase().split(" ");
    const occurences = {};
    for (let i = 0; i < mots.length; i++) {
        if (occurences[mots[i]] === undefined) {
            occurences[mots[i]] = 1;
        } else {
            occurences[mots[i]]++;
        }
    }
    console.log(occurences);
}

CompterOccurencesMots(phrase);