// Ecrire une fonction qui détermine si un nombre est premier. La fonction retourne si le nombre est premier ou non.

number = 2;

function IsPrimeNumber(number) {
    if (number < 2) {
        console.log("Le nombre n'est pas premier");
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    console.log("Le nombre est premier");
}

IsPrimeNumber(number);