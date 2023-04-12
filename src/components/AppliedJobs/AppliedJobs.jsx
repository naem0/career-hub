import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Appliedjob from '../AppliedJob/Appliedjob';
import logo from '../../assets/img/Vector.png'
import logo1 from '../../assets/img/Vector-1.png'



const AppliedJobs = () => {

    //  AppliedJob data lode from localStorage 
    const [applidJobs, setAppliedJob] = useState([]);
    const [filterJobs, setfilterJob] = useState([]);
    const jobs = useLoaderData();

    useEffect(()=>{
        const getAppliedJobData= JSON.parse(localStorage.getItem("applidJob"));
        
        let savedJob = [];
        for (let id of getAppliedJobData) {
            let addedJob = jobs.find(job => job.ID == id.id);
            savedJob= [...savedJob, addedJob];
        }
        
        setfilterJob(savedJob)
        setAppliedJob(savedJob);
    },[]);


    const filerJob = (remote)=>{
        
        if (remote) {
            const filtaredJob = filterJobs.filter(jb => jb.remote == remote );
            setAppliedJob(filtaredJob);
        }
    }
    

    return (
        <div>
            <div className='flex justify-between top-8'>
                <img className='-mt-12  h-full' src={logo} alt="" />
                <h1 className='text-4xl mt-16 font-semibold'>Applied Jobs</h1>
                <img className='-mt-24  h-full'src={logo1} alt="" />
            </div>
            <div className='float-right gap-10 overflow-hidden mt-8'>
            <button onClick={()=> filerJob('remote')} className='me-10 py-3 px-4 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold mt-4'>Remote Job</button>
            <button onClick={()=> filerJob('onsite')} className=' me-10 py-3 px-4 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold mt-4'>Onsite Job</button>
                
            </div>
            
            <div className="mt-36">
                {
                   applidJobs?.map(applidJob=> <Appliedjob
                   key={applidJob.ID}
                   applidJob={applidJob}
                   ></Appliedjob>) 
                }
            </div>
        </div>
    );
};

export default AppliedJobs;