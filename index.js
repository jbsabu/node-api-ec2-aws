import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


const dogs = [
  {
    name: 'Paco',
    breed: 'Chihuaha',
    age: 23
  },
  {
    name: 'Buba',
    breed: 'Chihuaha',
    age: 23
  },
  {
    name: 'Bob',
    breed: 'Chihuaha',
    age: 23
  },
  {
    name: 'Lucia',
    breed: 'Chihuaha',
    age: 23
  }
]
// routes

app.get("/path", (req, res) => {
  res.send(dogs);
});

app.listen(4000, () => console.log(`listening on port 4000`));
