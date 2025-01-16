const { register, login } = require("../services/registerAndLogin");

const registerHandler = async (req, res) => {
  const user = req.body;

  try {
    const result = await register(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const loginHandler = async (req, res) => {
  const user = req.body; // email and password only { email: ..., password: ... }
  try {
    const token = await login(user);

    if (!token)
      return res.status(401).json({ message: "Invalid email or password" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server Error ", error: err.message });
  }
};

module.exports = {
  register: registerHandler,
  login: loginHandler,
};
