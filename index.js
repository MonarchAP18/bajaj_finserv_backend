const express = require("express");
const cors = require("cors");

const app = express();

// Use CORS middleware
app.use(cors());
app.use(express.json());

// POST /bfhl route
app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    // Validate input
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid data format. 'data' should be an array." });
    }

    // Hardcoded user details
    const user_id = "akshaypadamwar12";
    const email = "akshaypadamwar12@gmail.com";
    const roll_number = "21BCT0223";

    // Filter numbers and alphabets
    const numbers = data.filter((item) => !isNaN(item) && !isNaN(parseFloat(item)));
    const alphabets = data.filter((item) => /^[a-zA-Z]+$/.test(item));
    const highest_lowercase = alphabets.filter((char) => /^[a-z]+$/.test(char)).sort().pop() || "";

    // Return response
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

// GET /bfhl route
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
