const characters = ['Goku', 'Vegeta', 'Trunks', 'Juan'];
const [ , , trunks, juan ] = characters;

export const returnArr = () => ['ABC', 123];

// const [ letters, numbers ] = returnArr();

const useState = ( value ) => [ value, () => console.log('HELLO WORLD!')];

const [ firstName, setName ] = useState('Goku');
setName();
