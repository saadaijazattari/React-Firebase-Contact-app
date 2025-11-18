import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Searcher from './components/Searcher'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import Contactcard from './components/Contactcard'
import AddandUpdateContact from './components/AddandUpdateContact'
import Usedisclose from './hooks/Usedisclose'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact'


const App = () => {
  const [contact, setcontact] = useState([])
  const {onClose,onOpen,IsOpen}=Usedisclose()
  

  useEffect(()=>{
    const getContacts=async()=>{
      try {
        
        const contactRef=collection(db,'contacts')
        onSnapshot(contactRef,(snapshot)=>{
          let contactlist=snapshot.docs.map((doc)=>{
            return{
              id:doc.id,
              ...doc.data()
            }
          })
          setcontact(contactlist)
          return contactlist;
        })

        
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getContacts()
  },[])



  const filterContacts=(e)=>{
    const value=e.target.value
    const contactRef=collection(db,'contacts')
        onSnapshot(contactRef,(snapshot)=>{
          let contactlist=snapshot.docs.map((doc)=>{
            return{
              id:doc.id,
              ...doc.data()
            }
          })


          const filteredContacts = contactlist.filter((cont) =>
  cont.name.toLowerCase().includes(value.toLowerCase())
)

          setcontact(filteredContacts)
          return filteredContacts;
        })

  }
  return (
    <>
      <div className='p-4 max-w-xl bg-gray-900 m-auto mt-10 h-200 '>
      <Navbar/>
      <Searcher 
      filterContacts={filterContacts}
      onOpen={onOpen}/>
      {contact.length <= 0 ? <NotFoundContact/>: contact.map((cont)=>{
      return  <Contactcard key={cont.id} cont={cont}/>
      })}
        
      </div>
      <AddandUpdateContact IsOpen={IsOpen} onClose={onClose} contact={contact} />
      <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App
