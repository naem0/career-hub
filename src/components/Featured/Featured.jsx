import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'

const Featured = ({jobData}) => {
    const navigate= useNavigate()
    const {CompanyLogo, JobTitle, CompanyName, Salary, CompanyLocation, ID, remote, job_time}= jobData
    return (
        <div className='border-2 p-8 rounded-lg'>
            <img src={CompanyLogo} alt="" />
            <div className="mt-6">
                <h4 className='text-xl font-semibold'>{JobTitle}</h4>
                <p className='mt-2 text-slate-400'>{CompanyName}</p>
                <div className='flex gap-4 pt-2'>
                    <p className='my-2 border border-indigo-500 text-indigo-500 rounded-md px-4 py-1'>{remote}</p>
                    <p className='my-2 border border-indigo-500 text-indigo-500 rounded-md px-4 py-1'>{job_time}</p>
                </div>
                <div className='flex gap-4 mt-2 text-slate-400'>
                    <p className=''><FontAwesomeIcon icon={faLocationDot} /> {CompanyLocation}</p>
                    <p><FontAwesomeIcon icon={faDollar} /> Salary : {Salary}</p>
                </div>
                <button onClick={()=>navigate(`job-details/${ID}`)} className='py-3 px-4 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold mt-4'>View Details</button>
            </div>
        </div>
    );
};

export default Featured;