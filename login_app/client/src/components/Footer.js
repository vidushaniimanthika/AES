import React from 'react'
import { Link } from 'react-router-dom'
import insta from "../assets/insta.png"
import fb from "../assets/fb.png"
import link from "../assets/link.png"
import logo from "../assets/logo.png"
import Data from "../utils/Data.js"


const Footer = () => {
    
  return (
    <div>
        <section id ="footer" className="bg-white md:px-28 ">
    <div className="container flex flex-col items-center justify-between px-6 py-10 mx-auto space-y-15 md:py-12 md:flex-row md:space-y-0">
      <h2 className='md:text-2xl font-bold leading-tight text-center text-2xl text-black md:mx-w-xl md:text-left'>
        Need to Know More Information ?
      </h2>
      {/* <div className='flex justify-center md:justify-start pt-6'>
        <Link to="/contact" className='p-1 px-6 pt-2 text-white rounded-full bg-black shadow-2xl hover:bg-gray-500  hover:text-black'>
        Contact us</Link>
      </div> */}
    </div>
  </section>
  
        <div className='bg-white md:px-28'>
            <div className='container flex flex-col-reverse justify-between px-6 py-2 mx-auto space-y-8 md:flex-row md:space-y-0'>
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                    <div>
                    <img src={logo} alt="campus logo" className='w-20'/>
                </div>
                <div className='flex justify-center space-x-3'>
                    <Link to ="/fb">
                    <img src={fb} alt="fb" className='h-8' />
                    </Link>

                    <Link to ="/insta">
                    <img src={insta} alt="insta" className='h-8' />
                    </Link>

                    <Link to ="/link">
                    <img src={link} alt="link" className='h-8' />
                    </Link>
                </div>
                </div>
                {/*two*/}
                <div className='flex justify-around gap-4'>
                    <div>
            
                        {Data.contactAddress.map(item =>{
                            return (
                                <div key={item.id} className='flex justify-between text-center'>
                                    <h3 className='text-black px-6 space-y-2 pt-3 text-clip justify-center'>{item.title}</h3>
                                    </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <form>
                        <div className='flex space-x-3   '>
                            <input 
                            type="text"
                            placeholder='Please Send Your Problems' 
                            className='flex-1 px-4  rounded-full bg-gray-300 outline-double '  />

                            <button className='px-6 py-2 text-white rounded-full bg-blue-950 hover:bg-blue-800 focus:outline-none'>
                                Send 
                            </button>
                        </div>
                    </form>
                    {/* <div className='text-black md:block'>
                        Copyright &copy All right reserved
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Foote