import React, { useState } from 'react'
import avatar from '../assets/user.png';
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';




export default function Register() {

const [file, setFile]=useState()

  const formik = useFormik({
    initialValues:{
     username:'',
     email : ''
    },
    validate :registerValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async values => {
      values = Object.assign(values, { profile: file || '' })
      console.log(values)
    }

  })
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
  <div className="container mx-auto">
<Toaster position='top-center' reverseOrder={false}></Toaster>

    <div className='flex justify-center items-center h-screen'>
      <div className={styles.glass} style={{width : "35%"}}>

      <div className="title flex flex-col items-center">
       <h4 className='text-5xl font-bold'>Register User</h4> 
       <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
        Enter New Password
       </span>

      </div>
      <form className='py-2' onSubmit={formik.handleSubmit}>
      <div className='profile flex justify-center py-4'>
        <label htmlFor="profile">
          <img src={file || avatar} className={styles.profile_img} alt="avatar" />
          </label>
          <input onChange={onUpload} type="file" id='profile' name='profile' />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps ('user_name')}  className={styles.textbox} type="text" placeholder='User Name' />
            <input {...formik.getFieldProps ('email')}  className={styles.textbox} type="text" placeholder='E-mail' />
            <button className={styles.btn} type='submit'>Register</button>
          </div>

      

       
      </form>
      </div>
      

    </div>

  </div>
  

  )
}
