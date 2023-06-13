import React, { useState } from 'react'
import logo from "../assets/logo.png";





 const Sidebar = (props) => {
    

    const [inactive, setInactive] = useState(false);

    

  return( 
    <div className={` side-bar ${inactive ? "inactive" : ""}`}>
    <div className='top-section'> 
    <div className='logo'>
    <img src= {logo} alt="logo" />
    </div>
    <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
    </div>

    <div className='search-controller'>
        <button className='search-btn'>
        <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder='Search heare' />
        </div>

        <div className='divider'></div>

        <div className='main-menu'>
            <ul>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                        <i class="bi bi-speedometer2"></i>
                            </div>
                            <span>Dashboard</span></a>
                </li>

                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                        <i class="bi bi-ticket-detailed-fill"></i>
                            </div>
                            <span>Admission Request </span></a>
                          {/* <ul className='sub-menu'>
                            <li>
                                <a> First Time Exam Request</a>
                            </li>

                            <li>
                                <a> Resit Exam Request</a>
                            </li>

                            </ul>   */}
                </li>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                        <i class="bi bi-view-list"></i>
                            </div>
                            <span>Exam Result View </span></a>
                </li>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                        <i class="bi bi-calendar2-week-fill"></i>
                            </div>
                            <span>Time Table </span></a>
                </li>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                        <i class="bi bi-card-text"></i>
                            </div>
                            <span> Report Submit </span></a>
                </li>
            </ul>
        </div>
        <div className='side-menu-footer'>
            <div>
                
            </div>
        </div>
                        

  </div>
  );


 
  
};

export default Sidebar
