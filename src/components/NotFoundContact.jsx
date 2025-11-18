import { UserRound } from 'lucide-react'
import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='bg-gray-900'>
      <div className='flex flex-col justify-center items-center h-160 gap-4 sm:flex-row'>
        <div>
        <UserRound className='w-24 h-24 text-gray-400 sm:w-32 sm:h-32' />
        </div>
        <h1 className='text-gray-100 text-xl font-bold sm:text-3xl'>Contact Not Found</h1>
      </div>
      
    </div>
  )
}

export default NotFoundContact

