//Contexte : Vous devez écrire une fonction qui détermine l'accès et les privilèges d'un utilisateur souhaitant
// réserver une place dans un club, en fonction de plusieurs critères.
//age : la personne doit etre majeure
//adhésion : membre ou non membre
//Type de réservation : standard, premium, VIP
// Nombre de personnes : le prix total dépend du nombre de personnes

//Instructions
//Calculer le prix en fonction du type de réservation : standard = 20€, premium = 35€, VIP = 50€ et du nombre de personnes
//Vérifier l'âge de la personne, si elle est majeure
//Réduction de 10% pour les membres
//Afficher le prix final avec les privilèges pour le nombre de personnes données

const personne_reservation = {nom:"Jean", age: 25, membre: true, type_reservation: "VIP", nombre_personnes: 3}

const standard = 20;
const premium = 35;
const VIP = 50;


function verification_age(personne_reservation){
    personne_reservation.age >= 18 ? reserver(personne_reservation) : console.log("Vous êtes mineur");
}

function reserver(personne_reservation){
    let prix = 0;
    console.log("Vous êtes majeur, Vous pouvez réserver !");
    switch (personne_reservation.type_reservation){
        case "standard":
            prix = personne_reservation.nombre_personnes * standard;
            break;
        case "premium":
            prix = personne_reservation.nombre_personnes * premium;
            break;
        case "VIP":
            prix = personne_reservation.nombre_personnes * VIP;
            break;
        default:
            console.log("Type de réservation inconnu");
    }

    prix *= personne_reservation.membre ? 0.9 : 1;

    console.log(`Le prix total est de ${prix}€ pour ${personne_reservation.nombre_personnes} personnes`);
}

verification_age(personne_reservation);