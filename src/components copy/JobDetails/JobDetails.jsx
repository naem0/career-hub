import React from 'react';

const JobDetails = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className='mt-4 text-slate-500'>
                        <samp className='font-semibold  text-slate-800'>Job Description: </samp> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.

                    </p>
                    <p className='mt-4 text-slate-500'>
                        <samp className='font-semibold  text-slate-800'>Job Responsibility: </samp>
                         A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </p>
                    <p className='mt-4 font-semibold'>
                        Educational Requirements:
                    </p>
                    <p className='mt-2 text-slate-500'>
                        A UI/UX (User Interface/User Experience)
                    </p>
                    <p className='mt-4 font-semibold'>
                        Experiences:
                    </p>
                    <p className='mt-2 text-slate-500'>
                        This includes designing the layout, visual design, and interactivity of the user interface.
                    </p>
                </div>
                <div className="">
                    <div className="bg-zinc-100 p-6 rounded-md">
                        <h5 className='font-semibold mb-4 text-lg'>Job Details</h5>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold text-slate-800'>Salary : </samp>
                            A UI/UX frb ya
                        </p>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold  text-slate-800'>Job Title : </samp>
                            A UI/UX frb ya
                        </p>
                        <h5 className='font-semibold my-4 text-lg'>Contact Information</h5>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold text-base text-slate-800'>Phone : </samp>
                            A UI/UX frb ya
                        </p>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold  text-slate-800'>Email : </samp>
                            A UI/UX frb ya
                        </p>
                        <p className='mt-2 text-slate-500'>
                            <samp className='font-semibold  text-slate-800'>Address : </samp>
                            A UI/UX frb ya
                        </p>
                    </div>
                    <button onClick={()=>navigate(`job-details/${ID}`)} className='my-4 py-2 w-full rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;