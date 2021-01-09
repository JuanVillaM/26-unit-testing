import '@testing-library/jest-dom';
import { getRegret } from '../../examples/template-string';

describe('Tests in template-string.js file', () => {

    test('getRegret method must return Hello Juan', () => {
        const name = 'Juan';
        const regret = getRegret( name );

        expect( regret ).toBe( 'Hello ' + name );
    })

    test('getRegret method must return Hello Ana if there are not args', () => {
        const regret = getRegret();

        expect( regret ).toBe( 'Hello Ana' );
    })

});