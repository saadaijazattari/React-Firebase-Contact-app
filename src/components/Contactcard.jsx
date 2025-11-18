import React from 'react'
import { CircleUser, Pencil, Trash2 } from 'lucide-react'
import {  deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Usedisclose from '../hooks/Usedisclose';
import AddandUpdateContact from './AddandUpdateContact';
import { toast } from 'react-toastify';



const deletaContact=async(id)=>{
  try {
    await deleteDoc(doc(db,'contacts',id))
    toast.success("contact deleted successfully")
  } catch (error) {
   console.log(error);
    
  }
}
const Contactcard = ({cont}) => {
  
const {onClose,onOpen,IsOpen}=Usedisclose()
  return (
    <div className='my-4 p-4 rounded flex items-center justify-between gap-4 px-4 bg-gray-800'>
      <div>
        <CircleUser className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300" />
      </div>

      <div className='flex flex-col '>
        <h2 className='font-bold text-lg text-white'>{cont.name}</h2>
        <p className='text-gray-300'>{cont.email}</p>
      </div>

      <div className='flex gap-3'>
        <Pencil 
          className="w-5 h-5 text-blue-400 cursor-pointer hover:text-blue-300"
          onClick={onOpen}
          
        />

        <Trash2 
          className="w-5 h-5 text-red-400 cursor-pointer hover:text-red-300"
          onClick={()=>deletaContact(cont.id)}
          
        />
      </div>
      <AddandUpdateContact onClose={onClose} isUpdate IsOpen={IsOpen} cont={cont}/>
    </div>
  )
}

export default Contactcard
