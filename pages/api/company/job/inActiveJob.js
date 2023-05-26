import Job from "../../../../models/Job";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {

        const { _id } = req.body;

        Job.findByIdAndUpdate(_id, { status: 'closed' })
            .then(() => {
                console.log('Job status updated successfully');
                // Additional code logic or response
                res.status(200);
            })
            .catch(err => {
                console.error('Error updating job status:', err);
                // Additional error handling logic or response
                res.status(422);

            });

        // Return the job data as JSON

    }
    else
        res.status(422).json({ error: "fail request signup" });
}

export default connectDb(handler);