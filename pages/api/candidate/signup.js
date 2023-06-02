import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { role, fname, lname, email, phone, password } = req.body.userData;
        const p = getRandomFactorFromEachGroup();
        const personality = {
            personality: p,
        };
        let u = new User({ role, fname, lname, email, phone, password, personality });
        const user = await u.save();
        res.status(200).json({ success: "success", user });
    }
    else
        res.status(422).json({ error: "fail request signup" });
}

export default connectDb(handler);

function getRandomFactorFromEachGroup() {
    const group1Factors = ['Extraversion', 'Introversion'];
    const group2Factors = ['Sensing', 'Intuition'];
    const group3Factors = ['Thinking', 'Feeling'];
    const group4Factors = ['Judging', 'Perceiving'];

    const getRandomFactor = (group) => {
        const randomIndex = Math.floor(Math.random() * group.length);
        return group[randomIndex];
    };

    const randomFactors = [
        getRandomFactor(group1Factors),
        getRandomFactor(group2Factors),
        getRandomFactor(group3Factors),
        getRandomFactor(group4Factors)
    ];

    return randomFactors;
}