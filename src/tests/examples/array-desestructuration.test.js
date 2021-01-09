import '@testing-library/jest-dom';
import { returnArr } from '../../examples/array-desestructuration';

describe('Tests in array-desestructuration.js file', () => {

    test('Must return a string and a number', () => {
        const [ letters, numbers ] = returnArr();

        expect( letters ).toEqual( 'ABC' );
        expect ( typeof letters ).toBe( 'string' );

        expect( numbers ).toEqual( 123 );
        expect ( typeof numbers ).toBe( 'number' );
    });

});