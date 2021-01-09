const active = true;

let message = '';

if(!active){
    message = 'Active';
} else {
    'Inactive';
}

const message =  (active) ? 'Active' : 'Inactive';
const message =  (active) ? 'Active' : null;

const message = active && 'Active';

console.log(message);