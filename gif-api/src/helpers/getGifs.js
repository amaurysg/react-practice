const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }d&limit=10&api_key=BFVFPdUbuJ42nJqNqXTIz00hickTXKrF`
    const response = await fetch(url)
    const {data} = await response.json()
    const gifs = data.map( img => {
      return {
        id: img.id, 
        title: img.title, 
        url: img.images?.downsized_medium.url
      }
    } )
    
  /*   setImg(gifs) */

    return gifs
  
  }

  export default getGifs