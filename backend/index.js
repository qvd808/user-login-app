const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES//

//Create a user
app.post("/register", async (req, res) => {
    try {
        const { userName, password } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (userName, password) VALUES ($1, $2)",
            [userName, password]
        );
        res.json(newUser);
        console.log("create user");
    } catch (error) {
        console.log(error.message);
    }
});

//Get all user
app.get("/login", async (req, res) => {
    try {
        const { userName, password } = req.query;
        const user = await pool.query(
            "SELECT * FROM users WHERE userName = $1 AND password = $2",
            [userName, password]
        );
        if (user.rows.length !== 0) {
            res.json(user.rows[0]);

        } else {
            res.send({ message: "No user name found!!!" });
        }
    } catch (error) {
        console.log(error.message);
    }
});

//Get a user

//Delete a user

app.listen(5000, () => {
    console.log("Sever has started on port 5000");
});
