import React from 'react'
import avatar from '../assets/user.png';
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { usernameValidate } from '../helper/validate';
import { passwordValidate } from '../helper/validate';


export default function Login() {
  const formik = useFormik({
    initialValues:{
      username:'',
     password:''
    },
    validate :usernameValidate,passwordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values=>{
      console.log(values)
    },
 
  })
 
  return (
  <div className="container mx-auto">
<Toaster position='top-center' reverseOrder={false}></Toaster>

    <div className='flex justify-center items-center h-screen'>
      <div className={styles.glass}>

      <div className="title flex flex-col items-center">
       <h4 className='text-5xl font-bold'>Welcome to the AES</h4> 
       <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Explore More by connecting with us.
       </span>

      </div>
      <form className='py-1' onSubmit={formik.handleSubmit}>
        <div className='profile flex justify-center py-4'>
          <img src={avatar} className={styles.profile_img} alt="avatar" />
          </div>


          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps ('username')}  className={styles.textbox} type="text" placeholder='Type Username' />
            <input {...formik.getFieldProps ('password')}  className={styles.textbox} type="text" placeholder='Type Password' />
            <button  className={styles.btn} type='submit'>Let's Go </button>
          </div>
         

       
      </form>
      </div>
      

    </div>

  </div>
  

  )
}
