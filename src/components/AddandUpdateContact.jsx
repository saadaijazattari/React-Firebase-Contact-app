import React from 'react'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from "yup";

const validation=Yup.object().shape({
  name:Yup.string().required("Name is required"),
  email:Yup.string().email("invalid email").required("Email is required")
})

const AddandUpdateContact = ({IsOpen,onClose,isUpdate,cont,contact}) => {
  const addContact=async(cont)=>{
    try {
      await addDoc(collection(db,'contacts'),cont)
      toast.success("contact added successfully")
    } catch (error) {
      console.log(error);
      
    }
  }
  const UpdateContact=async(cont,id)=>{
    try {
      await updateDoc(doc(db,'contacts',id),cont)
      toast.success("contact updated successfully")
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <Modal IsOpen={IsOpen}  onClose={onClose} contact={contact} isUpdate={isUpdate}>
      <Formik 
      validationSchema={validation}
      initialValues={isUpdate?{
        name:cont.name,
        email:cont.email
      } :{
        name:'',
        email:'',
      }
      
    }
      onSubmit={(value,{ resetForm })=>{
        console.log(value);
        isUpdate?
        UpdateContact(value,cont.id):
        addContact(value)
        onClose()
        resetForm()
        

      }
      }>
        <Form className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <label htmlFor="name" className="block text-white mb-1">Name</label>
            <Field name="name" className=" w-full border p-2 rounded outline-none border-gray-600 mb-2"/>
            <div className='text-red-500 text-sm'>
              <ErrorMessage name='name'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <Field name="email" className=" w-full border p-2 rounded outline-none border-gray-600 mb-2"/>
            <div className='text-red-500 text-sm'>
              <ErrorMessage name='email'/>
            </div>
          </div>
          <button type="submit" className='self-end bg-blue-500 px-3 py-1.5 cursor-pointer hover:bg-blue-600'>{isUpdate?"Update":"Add"} Contact</button>
        </Form>
      </Formik>
      </Modal>
  )
}

export default AddandUpdateContact
