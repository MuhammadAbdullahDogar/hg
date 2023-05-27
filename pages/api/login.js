import connectDb from "../../middleware/mongoose";
import Company from "../../models/Company";
import User from "../../models/User";
import bcrypt from 'bcrypt';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }

    try {
      // Checking if email exists
      let userExist;
      if (role === 'company') {
        userExist = await Company.findOne({ email });
      } else {
        userExist = await User.findOne({ email });
      }

      if (!userExist) {
        return res.status(401).json({ error: "Invalid email or password" });
      } else {
        const isPasswordMatch = await matchPassword(password, userExist.password);
        if (isPasswordMatch) {
          return res.status(200).json({ user: userExist });
        } else {
          return res.status(401).json({ error: "Invalid email or password" });
        }
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
