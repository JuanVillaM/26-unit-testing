const firstName = 'Juan';
const lastName = 'Villa';
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;

// console.log(fullName);

export function getRegret( name = 'Ana' ){
    return `Hello ${name}`;
}

// console.log(`I have something to tell you... ${getRegret(fullName)}`);

