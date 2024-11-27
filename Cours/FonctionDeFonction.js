function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}
let doubler = createMultiplier(2);
console.log(doubler(5)); //10