const express = require("express");
const app = express();

app.use(express.json());

app.post("/apple-login", (req, res) => {
  try {
    res.json({
      success: true,
      message: "User logged in successfully",
      data: {},
    });
  } catch (e) {
    res.status(401).json({ success: false, message: e.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
