let name1 = 'wes';
let name2 = 'wes';

console.log(name1 === name2);
name1 = 'scott';
console.log(name1 === name2);
name1 = name2;
console.log(name1 === name2);
name2 = name1;
name2 = 'westopher';

const person1 = {
    first: 'wes',
    last: 'bos',
    clothing: {
        shirts: 10,
        pants: 2,
    },
};

const person2 = {
    first: 'wes',
    last: 'bos',
};

const person3 = person1;
person3.first = 'Larry';
console.log(person3.first);
console.log(person1.first);

// shallow copies
const person4 = { ...person1 };
person4.first = 'Some Name';
console.log(person4.first);

const person5 = Object.assign({}, person1);
person5.clothing.shirts = 100;
console.log('person1', person1.clothing.shirts);

// deep copy with lodash
const person6 = _.cloneDeep(person1);
person6.clothing.shirts = 50;
console.log('person6', person6.clothing.shirts);
console.log('person1', person1.clothing.shirts);

const meatInventory = {
    bacon: 2,
    sausage: 3,
};

const veggieInventory = {
    lettuce: 5,
    tomatoes: 3,
};

const inventory = {
    ...meatInventory,
    ...veggieInventory,
    oysters: 10,
}

console.log(inventory);

function doStuff(data) {
    data = 'something else';
}

function doStuff2(data) {
    data.tomatoes = 10000000;
}

doStuff(name1);
console.log(name1);
doStuff2(inventory);
console.log(inventory);

