import { BrickWallFire } from 'lucide-react'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex bg-gray-800 mb-4  items-center justify-center gap-5 py-4 rounded text-white'>
      <BrickWallFire className='w-10 h-10 text-orange-600'/>
      <h1 className='text-xl font-bold'>Firebase Contact App</h1>
    </div>
  )
}

export default Navbar
