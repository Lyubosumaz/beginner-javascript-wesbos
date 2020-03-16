const age = 100;
const person = {
    age,
    name: 'Lyubosumaz',
    'cool-dude': true,
    'really cool': false,
    '777': true,
    dog: 'snickers',
    clothing: {
        shirts: 10,
        pants: 2,
    },
    sayHello: function (greetings = 'Hey') {
        return `${greetings} ${this.name}`;
    },
    sneeze: () => {
        console.log('AHHHH CHOOO', this);
    },
};

// person.job = 'Web Developer';
// person.age = 50;
// console.log(person.age);

// const propertyToCheck = prompt('What do you wan you check');
// console.log(person[propertyToCheck]);

// const freeze = Object.freeze(person);
// freeze.age = 80;
// console.log(freeze);

const nameInput = document.querySelector('[name="first"]');
const name = nameInput ? nameInput.value : '';
console.log(name);

delete person.age;