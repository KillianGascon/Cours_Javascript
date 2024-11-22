//Calculateur de Billets de parcs d'attractions
//Contexte : Vous êtes en charge de programmer un calculateur de prix pour un parc d'attractions.
//Enfant : moins de 12 ans = 10€
//Adolescent: entre 12 et 17 ans = 15€
//Adulte : entre 18 et 65 ans = 20€
//Senior : plus de 65 ans = 12€
//Réduction famille nombreuse : 10% pour les familles de 4 personnes ou plus
//Réduction groupe : 15% pour les groupes de 6 personnes ou plus

//Instructions
//Créer une fonction qui calcule et affiche le prix du ticket en fonction de l'âge de la personne
//et le nombre de personnes dans le groupe
//Afficher "prix réduit" si il y a une réduction ou "prix normal" si il n'y en a pas

const date_debut = new Date();

const reservation = {nombre_adultes: 2, nombre_enfants: 1, nombre_adolescents: 1, nombre_seniors: 0}

const prix = {enfant: 10, adolescent: 15, adulte: 20, senior: 12}

function calcul_prix(reservation){
    let prix_total = 0;

    const nombre_personnes = reservation.nombre_adultes + reservation.nombre_enfants + reservation.nombre_adolescents + reservation.nombre_seniors;

    console.log(`Il y a ${nombre_personnes} personnes dans le groupe`);

    prix_total = reservation.nombre_enfants * prix.enfant + reservation.nombre_adolescents * prix.adolescent + reservation.nombre_adultes * prix.adulte + reservation.nombre_seniors * prix.senior;

    if (nombre_personnes >= 6){
        console.log("Prix réduit, groupe");
        prix_total *= 0.85;
    } else if (nombre_personnes >= 4){
        prix_total *= 0.9;
    } else {
        console.log("Prix normal");
    }

    console.log(`Le prix total est de ${prix_total}€`);
}

calcul_prix(reservation);

console.log(new Date() - date_debut + " ms");