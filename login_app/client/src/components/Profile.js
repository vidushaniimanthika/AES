import React, { useState } from 'react'
import avatar from '../assets/user.png';

import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';

import styles from '../styles/Username.module.css';
import extend from '../styles/Profile.module.css';



export default function Profile() {

const [file, setFile]=useState()

  const formik = useFormik({
    initialValues:{
     username:'',
     email : ''
    },
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
    <div className={`${styles.glass} ${extend.glass}`} style={{ width: "45%", paddingTop: '3em'}}>

      <div className="title flex flex-col items-center">
       <h4 className='text-5xl font-bold'>User Profile</h4> 
       <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
       Eddir your Profile
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
            
          <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('firstName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='FirstName' />
                  <input {...formik.getFieldProps('lastName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='LastName' />
                </div>

                <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Mobile No.' />
                  <input {...formik.getFieldProps('')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='' />
                </div>

               
                <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Email*' />
                  <button className={styles.btn} type='submit'>Update</button>
            
            <div className="text-center pt-1">
                <span className='text-gray-500' >Come back latter<button className='text-red-500' to="/register">Log Out</button></span>
              </div>
          </div>

      

       
      </form>
      </div>
      

    </div>

  </div>
  

  )
}
