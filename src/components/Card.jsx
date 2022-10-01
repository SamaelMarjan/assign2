import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <img src={data.image} alt='img' />
    </div>
  )
}

export default Card