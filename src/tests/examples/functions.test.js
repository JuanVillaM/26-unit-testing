import '@testing-library/jest-dom';
import { getUser, getActiveUser } from '../../examples/functions';

describe('Tests in functions.js file', () => {

    test('getUser must return an object', () => {
        const userTest = {
            userId: 'ABCD12321',
            userName: 'THE_CONNOR465'
        };
        const user = getUser();

        expect( user ).toEqual( userTest );
    });

    test('getActiveUser must return an object', () => {
        const name = 'Juan';
        const user = getActiveUser( name );

        expect( user ).toEqual({
            userId: 'ABCD414',
            userName: name
        });
    });
    
});