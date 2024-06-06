function funcao1(){
    console.log('chamei a função')
}

funcao1()

function sayHello(name) {
    console.log("Hello, " + name);
}

// Chamando a função
sayHello("Alice");
// Saída: Hello, Alice


const sayHello = function(name) {
    console.log("Hello, " + name);
};

// Chamando a função
sayHello("Bob");
// Saída: Hello, Bob

//Arrow functions
const sayHello = (name) => {
    console.log("Hello, " + name);
};

// Chamando a função
sayHello("Charlie");
// Saída: Hello, Charlie



function greet(callback) {
    callback("Dave");
}

const sayHello = (name) => {
    console.log("Hello, " + name);
};

greet(sayHello); // Saída: Hello, Dave
