import '@testing-library/jest-dom';
import { getImages } from '../../examples/async-await';

describe('Tests with async-await and Fetch', () => {

    test('Must return the image url', async() => {
        const url = await getImages();
        // console.log(url);
        expect( url.includes( 'https://' ) ).toBe( true );
    });

});