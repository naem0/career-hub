import React from 'react';

const AppliedJob = () => {
    return (
        <div>
            <div className='border-2 p-8 rounded-lg flex justify-between gap-10 items-center'>
                <img src="" alt="" />
                <div className="">
                    <h4 className='text-xl font-semibold'>Technical Database Engineer</h4>
                    <p className='mt-2 text-slate-400'>google</p>
                    <div className='flex gap-4 pt-2'>
                        <p className='my-2 border border-indigo-500 text-indigo-500 rounded-md px-4 py-1'>Remote</p>
                        <p className='my-2 border border-indigo-500 text-indigo-500 rounded-md px-4 py-1'>full time</p>
                    </div>
                    <div className='flex gap-4 mt-2 text-slate-400'>
                        <p className=''>Dhaka, Bangladesh</p>
                        <p>Salary : 100K - 150K</p>
                    </div>

                </div>
                <div className="">
                    <button className='py-3 px-4 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold mt-4'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;