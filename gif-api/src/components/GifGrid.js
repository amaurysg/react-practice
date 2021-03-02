import React from 'react'
/* import getGifs from '../helpers/getGifs' */
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import { Ring } from 'react-awesome-spinners'


const GifGrid = ({category}) => {

    //Here test to see utils of useEffect
  /* const [contador, setcontador] = useState(0) */

  /* const [img, setImg] = useState([])


  useEffect(() => {
    getGifs(category)
    .then(imgs => setImg(imgs))
  }, [category])
 */

 


  /* getGifs() */

  //Here Custom Hooks
  //Desestructure object from customs hooks
  const {data:images, loading} = useFetchGifs(category)

 
  


  return (
      <>
          <h3>{category}</h3>
          {loading && <Ring/> }

          <div className="card-grid" >
        
              {
                //Tomamos array img(tiene la info) y desestrucutamos (id, title, url)
                images.map( ({id, title, url}) => {
                  return (
                 <div key={id}>
                      <GifGridItem 
                        id={id}
                        title={title}
                        url={url}
                        key={id}
                        /> 
                   
                 </div>
                  )
                }
                
                )
              }         
        </div>
      </>
  )
}
/* { ...img }
key={img.id} */

export default GifGrid
