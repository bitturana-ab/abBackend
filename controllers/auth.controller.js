import User from "../model/user.model.js";

export const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({
      username,
      password,
    });
  } catch (error) {}
};
