const person1 = {
    name: 'wes',
    age: 200
}
const myMap = new Map();
// .set()
myMap.set('name', 'wes');
myMap.set(100, 'This is a number');
myMap.set(person1, 'Really Cool');
console.log(myMap);

console.log(myMap.get(person1))
const score = 100;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');
console.log(`you win a ${prizes.get(score)}`);

// select that ul
const ul = document.querySelector('.prizes');
for (const [key, value] of prizes) {
    console.log(key, value);
    const li = `<li>${key} - ${value}</li>`
    ul.insertAdjacentHTML('beforeend', li)
}

// .has()
myMap.has(100);
console.log(myMap.has(100))
// .delete()
myMap.delete('name');
// console.log(myMap.delete('name'));
console.log(myMap);

console.log(JSON.stringify(myMap), 'empty obj')
let a = JSON.stringify(person1);
console.log(JSON.stringify(person1));
console.log(a)
console.log(JSON.parse(a));