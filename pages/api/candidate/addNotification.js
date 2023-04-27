import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { _id, notification } = req.body;

        User.findById(_id, (err, user) => {
            if (err) {
                console.error(err);
                return;
            }

            user.notifications.addToSet(notification);
            user.save((err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Notification added successfully!');
                }
            });
        });
        res.status(200).json({ status: "success" });
    }
    else {
        res.status(422).json({ status: "error" });
    }
}

export default connectDb(handler);
