const apiKey = 'k0IGdf4O3TqYY1pgGlHGl76FTBlGfd75';

const http = fetch(`https://api.giphy.com/v1/random?api_key=${apiKey}`);

http.then(resp => resp.json ())
    .then(({data}) => {
        const {url} = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);