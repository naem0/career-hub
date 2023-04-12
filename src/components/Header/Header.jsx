import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon, faX } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [opan, setOpan]= useState(false);
    return (
        <div className='text md:flex gap-4 justify-between align-middle mb-8'>
            <div className="flex justify-between">
                <h2 className='font-semibold text-2xl'>Dream Hub</h2>
                <span onClick={()=> setOpan(!opan)} className='md:hidden block'>
                    <samp> {opan === true ? 
                    <FontAwesomeIcon icon={faX} /> 
                    :<FontAwesomeIcon icon={faNavicon} /> }</samp>
                </span>
            </div>
            

            <ul className={`${opan? 'mt-4':'-mt-96'} md:flex gap-8 align-middle my-3 text-gray-500  transition-all duration-500 `}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/statistics">Statistics</NavLink></li>
                <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <button className='py-4 md:hidden mt-6 md:mt-0 px-6 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Star Applying</button>
            </ul>
            <button className='hidden md:block py-4 mt-6 md:mt-0 px-6 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Star Applying</button>
        </div>

    );
};

export default Header;