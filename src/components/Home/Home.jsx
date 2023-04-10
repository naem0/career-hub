import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-2'>
           <div className="">
                <h1 className='text-6xl font-semibold'>One Step <br/> Closer To Your <br/> <samp className=''>Dream Job</samp></h1>
                <p className='my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='py-4 px-6 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Get Started</button>
           </div>
           <img src="../../assets/img/profil.png" alt="" />
        </div>
    );
};

export default Home;