import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    //Here test to see utils of useEffect
  /* const [contador, setcontador] = useState(0) */

  const [img, setImg] = useState([])


  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async (string)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=pinkfloyd&limit=10&api_key=BFVFPdUbuJ42nJqNqXTIz00hickTXKrF`
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
    setImg(gifs)
  
  }

  /* getGifs() */

  return (
    <div className="card-grid">
        <li>{category}</li>

            {
              //Tomamos array img(tiene la info) y desestrucutamos (id, title, url)
              img.map( ({id, title, url}) => {
                return (
               <div>
                    <GifGridItem 
                      key={id}
                      id={id}
                      title={title}
                      url={url}
                      /* { ...img }
                      key={img.id} */
                     /> 
                 
               </div>
                )
              }
               
              )
            }
  
        
    </div>
  )
}

export default GifGrid
