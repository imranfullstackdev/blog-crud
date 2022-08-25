const express = require("express");
const app = express();
app.use(express.json());
const port = 8000;
const pool = require("./Model/db");
const cors = require("cors");
app.use(cors());
// Getting all the values from database
app.get("/api/v1/get", async (req, res) => {
  try {
    const getAll = await pool.query(`select * from BlogTable`);
    //res  is server related
    //req.body is frontend related
    res.json(getAll.rows);
    console.log(getAll.rows);
  } catch (err) {
    console.log(err);
  }
});
//   for posting the Blog
app.post("/register", async (req, res) => {
  try {
    const { data } = req.body;
    const registerUser = await pool.query(
      `insert into BlogTable (Blog,blogtitle) values($1,$2) returning *`,
      [req.body.Blog,req.body.blogtitle]
    );
    res.json(registerUser.rows);
    console.log(registerUser.rows);
  } catch (error) {
    console.log(error.message);
  }
});
// for deleting the Blog
app.delete("/deleteUser/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser = await pool.query("delete from BlogTable where id=$1", [
    id,
  ]);
  res.json("user deleted sucessfully");
});

// for editing the data
app.put(`/edituser/:id`, async (req, res) => {
  const { id } = req.params;
  const editUser = await pool.query(
    `update BlogTable set Blog=$1,blogtitle=$2 where id=$3`,
    [
      req.body.Blog,
      req.body.blogtitle,
      id,
    ]
  );
  res.json("Edited");
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
