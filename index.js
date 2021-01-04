const express = require("express");
const app = express();

const appleSignin = require("apple-signin");

app.use(express.json());

app.post("/apple-login", async (req, res) => {
  try {
    const APPLE_CLIENT_ID = "PUT_YOUR_APPLE_CLIENT_ID";

    // Client side will authenticate user from client app and send you idToken and email
    const { idToken, email } = req.body;

    const result = await appleSignin.verifyIdToken(idToken, APPLE_CLIENT_ID);

    // This will contain the unique identifer for this user from apple
    const appleId = result.sub;

    // Now we check if appleId already exist in our database
    // If it exist then we skip the user creation process and generate a JWT and send it to client
    // else we will first create user and set it's appleId and email then generate a JWT and send it to client

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
