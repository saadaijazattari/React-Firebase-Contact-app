import { Plus, Search } from 'lucide-react'
import React from 'react'

const Searcher = ({onOpen,filterContacts}) => {
  
  return (
    <div className='flex justify-center items-center gap-3'>
      <div className='relative w-full'>
        <Search className='text-gray-100 absolute top-2 left-3'/>
        <input type="text" className=' w-full border focus:outline-none border-gray-700 bg-transparent rounded py-2 px-10 text-gray-100'
        onChange={filterContacts}/>
      </div>
      
      <div className='w-15 h-13 bg-blue-500 rounded-full text-black flex items-center justify-center cursor-pointer' onClick={onOpen}>
        <Plus/>
      </div>
    </div>
  )
}

export default Searcher
