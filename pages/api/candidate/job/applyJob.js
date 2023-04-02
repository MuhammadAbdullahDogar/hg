import Job from "../../../../models/Job";
import User from "../../../../models/User";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(422).json({ error: 'Invalid request method' });
    }

    const {jobId, candidateId, matchPercent, screeningQuestions} = req.body;


    if (!jobId || !candidateId) {
        return res.status(422).json({ error: 'Missing jobId or candidateId' });
    }

    try {
        //parallel execution
        const [updatedJob, updatedCandidate] = await Promise.all([
            Job.findByIdAndUpdate(jobId, {
                $push: {
                    candidates: {
                        candidate: candidateId,
                        status: 'applied',
                        matchPercent: matchPercent,
                        screeningQuestions
                    },
                },
            }, { new: true }),
            User.findByIdAndUpdate(candidateId, {
                $push: {
                    jobsApplied: {
                        job: jobId,
                        status: 'applied',
                        matchPercent: matchPercent,
                    },
                },
            }, { new: true })
        ]);

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

export default connectDb(handler);

