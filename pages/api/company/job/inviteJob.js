import Job from "../../../../models/Job";
import User from "../../../../models/User";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(422).json({ error: 'Invalid request method' });
    }

    const { jobId, candidateId } = req.body;


    if (!jobId || !candidateId) {
        return res.status(422).json({ error: 'Missing jobId or candidateId' });
    }

    try {
        //parallel execution
        const [updatedJob, updatedCandidate] = await Promise.all([
            Job.findByIdAndUpdate(jobId, {
                $set: {
                    'candidates.$[elem].status': 'invited',
                    'candidates.$[elem].statusUpdatedAt': Date.now()
                }
            }, {
                arrayFilters: [{ 'elem.candidate': candidateId }],
                new: true
            }),
            User.findByIdAndUpdate(candidateId, {
                $set: {
                    'jobsApplied.$[elem].status': 'invited',
                    'jobsApplied.$[elem].statusUpdatedAt': Date.now()
                }
            }, {
                arrayFilters: [{ 'elem.job': jobId }],
                new: true
            })
        ]);


        res.json({ success: true, updatedJob });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

export default connectDb(handler);