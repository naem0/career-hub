

const appliedjobsLode = async ()=>{
    const loadedJobs = await fetch('jobData.json');
    const jobs = await loadedJobs.json();


    const storedJob = getjobLS();

    const savedJobs = [];

    for (const id in storedJob) {
        const addedJob = jobs.find(jd => jd.ID === id);
        if (addedJob) {
            savedJobs.push(addedJob);
        }
    }
    return savedJobs;
}
export default appliedjobsLode;