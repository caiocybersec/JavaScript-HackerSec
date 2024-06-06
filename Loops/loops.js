for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Saída: 0, 1, 2, 3, 4


var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Saída: 0, 1, 2, 3, 4


var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Saída: 0, 1, 2, 3, 4


const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
// Saída: a: 1, b: 2, c: 3


var arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}
// Saída: 1, 2, 3, 4, 5


var arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Saída: 10, 20, 30, 40, 50


var arr = [10, 20, 30, 40, 50];
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});
// Saída:
// Index: 0, Value: 10
// Index: 1, Value: 20
// Index: 2, Value: 30
// Index: 3, Value: 40
// Index: 4, Value: 50
