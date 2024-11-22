let greet = function (name) {
    console.log(`Hello, ${name}!`);
};

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(name, callback) {
    callback(name);
}

processUserInput("charles", sayHello);
processUserInput("Mathilde", greet);