const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid data format. 'data' should be an array." });
    }

    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

    const numbers = data.filter((item) => !isNaN(item) && !isNaN(parseFloat(item)));
    const alphabets = data.filter((item) => /^[a-zA-Z]+$/.test(item));
    const highest_lowercase = alphabets.filter((char) => /^[a-z]+$/.test(char)).sort().pop() || "";

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase ? [highest_lowercase] : [],
    });
});

module.exports = app;
