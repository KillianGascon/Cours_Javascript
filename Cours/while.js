// Déclarer une variable nombreAuHasard qui contient un nombre aléatoire entre 1 et 50
let nombreAuHasard = Math.floor(Math.random() * 50) + 1;
// Déclarer une variable compteur initialisée à 0
let compteur = 0;

// Tant que nombreAuHasard est différent de 50
while (nombreAuHasard !== 50) {
    // Afficher la valeur de nombreAuHasard
    console.log("iteration", compteur);
    // Générer un nouveau nombre aléatoire entre 1 et 50
    nombreAuHasard = Math.floor(Math.random() * 50) + 1;
    // Incrémenter la variable compteur
    compteur++;
}

// Afficher le nombre aléatoire trouvé
console.log("trouvé en", compteur, "itérations");