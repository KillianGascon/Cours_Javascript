function somme(...nombres) {
    return nombres.reduce((acc, val) => acc + val, 0);
}
console.log(somme(1, 2, 3)); // 5