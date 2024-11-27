const phrase = "Hello World!";
const voyelles = ["a", "e", "i", "o", "u", "y"];

function CompterlesVoyelles(phrase) {
    let nbVoyelles = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i].toLowerCase())) {
            nbVoyelles++;
        }
    }
    console.log(`Il y a ${nbVoyelles} voyelles dans la phrase "${phrase}"`);
}
CompterlesVoyelles(phrase);
