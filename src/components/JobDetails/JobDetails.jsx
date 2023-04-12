import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faPhone, faEnvelope, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/Vector.png'
import logo1 from '../../assets/img/Vector-1.png'

const JobDetails = () => {
    const jobs = useLoaderData();
    const dynamic = useParams();
    const dynamicId = dynamic.id;

    const [jobDetals, setJobDetals] = useState({})

    useEffect(() => {
        const addedJob = jobs.find(jd => jd.ID == dynamicId);
        setJobDetals(addedJob);

    }, []);

    // applidJob hendle 
    const [applidJob, setAppliedJob] = useState(0);
    const hendleAppliedJob = (id) => {
        const previousAppliedJob = JSON.parse(localStorage.getItem("applidJob"));
        let applidJob = [];
        const setBlogAppliedJob = { id };

        if (previousAppliedJob) {
            const isBlogAppliedJob = previousAppliedJob.find(bl => bl.id == id);
            if (isBlogAppliedJob) {
                alert("Already applied")
            }
            else{
                applidJob = [...previousAppliedJob, setBlogAppliedJob];
                setAppliedJob(applidJob);
                localStorage.setItem("applidJob", JSON.stringify(applidJob));
            }
        }
        else {
            applidJob.push(setBlogAppliedJob);
            setAppliedJob(applidJob);
            localStorage.setItem("applidJob", JSON.stringify(applidJob));
        }
    };

    const { JobTitle, CompanyName, Salary, CompanyLocation, ID, JobDescription, EducationRequirements, JobExperience, JobResponsibilities, email, phone, } = jobDetals;

    return (
        <div className=''>
            <div className=' md:flex justify-between top-8'>
                <img className='-mt-12 h-full' src={logo} alt="" />
                <h1 className='text-4xl mt-16 font-semibold'>Job Details</h1>
                <img className='-mt-28 h-full'src={logo1} alt="" />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-12 ">
                <div className="col-span-2">
                    <p className='mt-4 text-slate-500'>
                        <samp className='font-semibold  text-slate-800'>Job Description: </samp>
                        {JobDescription}.
                    </p>
                    <p className='mt-4 text-slate-500'>
                        <samp className='font-semibold  text-slate-800'>Job Responsibility: </samp>
                        {JobResponsibilities}
                    </p>
                    <p className='mt-4 font-semibold'>
                        Educational Requirements:
                    </p>
                    <p className='mt-2 text-slate-500'>
                        {EducationRequirements}
                    </p>
                    <p className='mt-4 font-semibold'>
                        Experiences:
                    </p>
                    <p className='mt-2 text-slate-500'>
                        {JobExperience}
                    </p>
                </div>
                <div className="">
                    <div className="bg-zinc-100 p-6 rounded-md">
                        <h5 className='font-semibold mb-4 text-lg'>Job Details</h5>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold text-slate-800'><FontAwesomeIcon icon={faDollar} /> Salary : </samp>
                            {Salary}
                        </p>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold  text-slate-800'><FontAwesomeIcon icon={faCalendarDays} /> Job Title : </samp>
                            {JobTitle}
                        </p>
                        <h5 className='font-semibold my-4 text-lg'>Contact Information</h5>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold text-base text-slate-800'><FontAwesomeIcon icon={faPhone} /> Phone : </samp>
                            {phone}
                        </p>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold  text-slate-800'><FontAwesomeIcon icon={faEnvelope} /> Email : </samp>
                            {email}
                        </p>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold  text-slate-800'><FontAwesomeIcon icon={faLocationDot} /> Address : </samp>
                            {CompanyLocation}
                        </p>
                    </div>
                    <button onClick={()=>hendleAppliedJob(ID)} className='my-4 py-2 w-full rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;