import React from 'react'

const GifGridItem = ({id, title, url}) => {

  /* console.log(id, title, url) */
  return (
    <div key={id} className="card animate__animated animate__slideInDown" >
      <img src={url} alt={title} />
        {/* <p >{title}</p> */}
    </div>
  )
}

export default GifGridItem
