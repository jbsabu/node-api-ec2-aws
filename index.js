import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// routes

app.get("/path", (req, res) => {
  res.send('welcome to my API');
});

app.listen(4000, () => console.log(`listening on port 4000`));
