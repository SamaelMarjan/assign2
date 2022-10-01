import React from 'react';

const TecData = ({data}) => {
    

  return (
    <div className='w-[100%] h-[100%] flex items-center relative' >
            <div id='slider' className='scrollbar-hide w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex gap-4'>
                {
                    data.map((item, key) => (
                        
                            <>
                                <img src={item.image} alt='img' id={key} className='w-[350px] object-cover' />
                            </>
                        
                    ))
                }
            </div>
    </div>
  )
}

export default TecData