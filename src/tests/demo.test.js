describe('Tests in demo.test.js file', () => {

    test('Strings must be the same', () => {
        const message = 'Hello World';
        const message2 = `Hello World`;

        expect(message).toBe(message2);
    })

});