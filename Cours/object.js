let person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer",
}

console.log(person.name);
console.log(person["age"]);

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2019,
}

car.year = 2020;
car["color"] = "blue";

console.log(car);