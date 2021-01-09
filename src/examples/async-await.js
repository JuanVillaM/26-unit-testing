export const getImages = async() => {
    try {
        const apiKey = 'k0IGdf4O3TqYY1pgGlHGl76FTBlGfd75';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        return url;

    } catch ( error ){
        return 'No exists';
    }
}
