import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import Featured from '../Featured/Featured';
import logo from '../../assets/img/profil.png'

const Home = () => {
    let [jobCategorys, setJobCategory] = useState([]);
    useEffect(() => {
        fetch("category.json")
            .then(response => response.json())
            .then(data => setJobCategory(data))
    }, []);


    const [jobDatas, setJobData] = useState([]);
    useEffect(() => {
        fetch("jobData.json")
            .then(response => response.json())
            .then(data => setJobData(data))
    }, []);
    
    return (
        <div className="">
            <div className='grid grid-cols-2'>
                <div className="">
                    <h1 className='text-6xl font-semibold'>One Step <br /> Closer To Your <br /> <samp className='text-indigo-500'>Dream Job</samp></h1>
                    <p className='my-4 text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='py-4 px-6 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Get Started</button>
                </div>
                <img className='w-9/12' src={logo} alt="" />
            </div>
            <div className='my-12'>
                <div className='text-center my-8'>
                    <h3 className='text-4xl font-semibold'>Job Category List</h3>
                    <p className='my-4 text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        jobCategorys.map(jobCategory => <JobCategory
                            jobCategory={jobCategory}
                            key={jobCategory.id}
                        ></JobCategory>)
                    }
                </div>
            </div>
            <div className='my-12'>
                <div className='text-center my-8'>
                    <h3 className='text-4xl font-semibold'>Featured Jobs</h3>
                    <p className='my-4 text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {
                        jobDatas.map(jobData => <Featured
                            jobData={jobData}
                            key={jobData.ID}
                        ></Featured>)
                    }
                </div>
                <div className='text-center'>
                    <button className='py-4 px-6 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold my-6'>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Home;