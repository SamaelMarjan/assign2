import React from 'react'

const TecData = ({data}) => {
  return (
    <div className='w-[100%] h-[100%] flex relative' >
        <div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex'>
            {
                data.map((item, key) => (
                    
                        <>
                            <img src={item.image} alt='img' id={key} />
                        </>
                    
                ))
            }
        </div>
    </div>
  )
}

export default TecData