export const getGif = async( category , setImages) => {
        
    const apiKey = 'HRdnbyXM9939bzQv8qFljHUnBxX74ePV';
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const respuest = await fetch( url );
    const { data } = await respuest.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
            
        }
    });

    return gifs;
}