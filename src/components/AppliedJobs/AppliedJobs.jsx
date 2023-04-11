import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Appliedjob from '../AppliedJob/AppliedJob';




const AppliedJobs = () => {

    //  AppliedJob data lode from localStorage 
    const [applidJobs, setAppliedJob] = useState([]);
    const jobs = useLoaderData();
    useEffect(()=>{
        const getAppliedJobData= JSON.parse(localStorage.getItem("applidJob"));

        let savedJob = [];
        
        for (let id of getAppliedJobData) {
            let addedJob = jobs.find(job => job.ID == id.id);
            savedJob= [...savedJob, addedJob]
        }
        setAppliedJob(savedJob);
    },[]);

    return (
        <div>
            <h3>amar</h3>
            <div className="">
                {
                   applidJobs.map(applidJob=> <Appliedjob
                   key={applidJob.ID}
                   applidJob={applidJob}

                   ></Appliedjob>) 
                }
            </div>
        </div>
    );
};

export default AppliedJobs;