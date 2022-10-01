import React from 'react'

const TecData = ({data}) => {

  return (
    <div className='w-[100%] h-[100%] flex items-center relative' >
        <div>
            {
                data.map((item, key) => (
                    
                        <>
                            <img src={item.image} alt='img' className='relative'/>

                        </>
                    
                ))
            }
        </div>
    </div>
  )
}

export default TecData