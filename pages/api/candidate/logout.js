import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.JWT_Token;

  if (!jwt) {
    return res.json({ message: "You are already logged out..." });
  } else {
    const serialised = serialize("JWT_Token", null);

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}