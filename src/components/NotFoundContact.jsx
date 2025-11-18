import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='bg-gray-900'>
      <div className='flex flex-col justify-center items-center h-160 gap-4 sm:flex-row'>
        <div>
        <img src="/images/pro.png" className='w-40' alt="" />
        </div>
        <h1 className='text-gray-100 text-xl font-bold sm:text-3xl'>Contact Not Found</h1>
      </div>
      
    </div>
  )
}

export default NotFoundContact
