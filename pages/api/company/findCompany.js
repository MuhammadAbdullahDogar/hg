import connectDb from "../../../middleware/mongoose";
import Company from "../../../models/Company";
import bcrypt from 'bcrypt';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { _id } = req.body;

    try {
      // Checking if email exists
      let userExist = await Company.findOne({ _id });

      if (!userExist) {
        return res.status(401).json({ error: "Server Error" });
      } else {
          return res.status(200).json({ user: userExist });
      }
    } catch (error) {
      console.error("Error while handling the request:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    console.log("e");

    return res.status(400).json({ error: "Bad request" });
  }
};

export default connectDb(handler);

async function matchPassword(plainPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Error comparing passwords");
  }
}
