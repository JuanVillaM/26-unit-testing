const person = {
    humanName: 'Goku',
    age: 120,
    power: 'Super Saiyan'
}

// const { humanName, age, power } = person;

// console.log(age);
// console.log(power);
// console.log(humanName);

const useContext = ({ name, age, rank = 'Legend' }) => {
    // console.log(name, age, rank);

    return  {
        secretName: name,
        yearsOld: age,
        coords: {
            lat: -15.64,
            lng: 54.41
        }
    }
};

const { secretName, yearsOld, coords:{ lat, lng } } = useContext( person );

console.log( secretName, yearsOld );
console.log( lat, lng );