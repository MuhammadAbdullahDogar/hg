import connectDb from "../../../../middleware/mongoose";
import Job from "../../../../models/Job";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { id } = req.body;

            console.log(id);
            const job = await Job.findById(id);

            if (!job) {
                // If the job is not found, return a 404 status code
                return res.status(404).json({ status: "error", message: "job not found" });
            }

            res.status(200).json({ status: "success", job });
        } catch (error) {
            // If there is an error during the database query, return a 500 status code
            console.error(`Error fetching job: ${error}`);
            res.status(500).json({ status: "error", message: "Internal server error" });
        }
    } else {
        res.status(422).json({ status: "error", message: "Invalid request method" });
    }
}

export default connectDb(handler);