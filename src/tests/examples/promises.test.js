import '@testing-library/jest-dom';
import { getHeroByIdAsync } from '../../examples/promises';
import heroes from '../../data/heroes';

describe('Tests with Promises', () => {

    test('getHeroByIdAsync must return an async hero', ( done ) => {
        const id = 1;

        getHeroByIdAsync( id ).then( hero => {
            expect( hero ).toBe( heroes[0] );
            done();
        });
    });

    test('Must return an error if the hero by id does not exist', ( done ) => {
        const id = 10;

        getHeroByIdAsync( id ).catch( error => {
            expect( error ).toBe( 'Error searching the hero' );
            done();
        });
    });

});