const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");
require("dotenv").config({ path: "../.env" });

app.use(cors());
app.use(express.json());

//create button
app.post("/buttons", async (req, res) => {
  try {
    const { description } = req.body;
    console.log(description);
    const newButton = await pool.query(
      "INSERT INTO botones (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newButton.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
//get all buttons
app.get("/buttons", async (req, res) => {
  try {
    const allButtons = await pool.query("SELECT * FROM botones");
    res.json(allButtons.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//update a button
app.put("/buttons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE botones SET description = $1 WHERE btn_id = $2",
      [description, id]
    );
    res.json(description);
  } catch (error) {
    console.error(error.message);
  }
});

//delete a button
app.delete("/buttons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM botones WHERE  btn_id = $1",
      [id]
    );
    res.json("Todo vas deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8000, () => {
  console.log("server has start on port 8000 ");
});
