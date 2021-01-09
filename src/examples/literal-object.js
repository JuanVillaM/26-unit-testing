const person = {
    firstName: 'Juan',
    lastName: 'Villa',
    age: 16,
    direction: {
        city: 'New York',
        zip: 5562132465,
        lat: 14.1654654,
        lng: 32.1456465
    }
};

const person2 = { ...person };
person2.firstName = 'Ana';

// console.table({person});
console.log(person);
console.log(person2);