

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = 'q8Ny8o7xAdZCfUAhm8KauSQaCG5w8tN0';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

       return url

    } catch (error) {
        // manejo del error
        return 'No existe'
    }
    
    
    
}




 export default getImagen


