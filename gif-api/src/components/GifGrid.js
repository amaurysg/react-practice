import React from 'react'

const GifGrid = ({category}) => {

  const getGifs = async (string)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=BFVFPdUbuJ42nJqNqXTIz00hickTXKrF`
    const response = await fetch(url)
    const {data} = await response.json()
    const gifs = data.map( img => {
      return {
        id: img.id, 
        title: img.title, 
        url: img.images?.downsized_medium.url
      }
    } )
    console.log(gifs)

  
  }

  getGifs()

  return (
    <div>
        <li>{category}</li>
    </div>
  )
}

export default GifGrid
