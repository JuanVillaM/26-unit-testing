import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroById, getHeroesByOwner } from '../../examples/imports-exports';

describe('Tests in Heroes Functions', () => {

    test('Must return a hero by id', () => {
       const id = 1;
       const hero = getHeroById( id );
       const dataHero = heroes.find( h => h.id === id );

       expect( hero ).toEqual( dataHero );
    });

    test('Must return undefined if hero does not exist', () => {
        const id = 10;
        const hero = getHeroById( id );
 
        expect( hero ).toBe( undefined );
     });

    test('Must return an array with the DCs heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        const dataHeroes = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( dataHeroes );
    });

    test('Must return an array with the Marvels heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
    });

});