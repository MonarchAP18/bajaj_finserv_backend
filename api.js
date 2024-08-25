const express = require("express");
const app = express();
app.use(express.json());

app.post("/bfhl", (req, res) => {
  const { full_name, dob, email, roll_number, array } = req.body;

  const numbers = array.filter((item) => typeof item === "number");
  const alphabets = array.filter((item) => typeof item === "string" && /^[a-zA-Z]+$/.test(item));
  const highest_lowercase = alphabets.filter((char) => /^[a-z]+$/.test(char)).sort().pop() || "";

  const user_id = `${full_name}_${dob.replace(/\//g, "")}`;

  res.json({
    is_success: true,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase: highest_lowercase,
  });
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

module.exports = app;
