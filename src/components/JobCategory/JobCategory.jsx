import React from 'react';

const JobCategory = ({ jobCategory }) => {
    const { Categorylogo, CategoryName, Jobsavailable } = jobCategory;
    return (
        <div className='bg-zinc-100 p-6 rounded-md '>
            <img src={Categorylogo} alt="" />
            <h4 className='text-xl mt-6'>{CategoryName}</h4>
            <p className='mt-4 text-slate-400'>{Jobsavailable}</p>

        </div>
    );
};

export default JobCategory;