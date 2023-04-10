import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between align-middle'>
            <h2 className='font-semibold text-2xl'>CareerHub</h2>
            <ul className='flex gap-8 align-middle text-gray-500'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/statistics">Statistics</NavLink></li>
                <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
            <button className='py-4 px-6 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Star Applying</button>
        </div>
        
    );
};

export default Header;