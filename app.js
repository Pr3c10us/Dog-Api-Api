const express = require("express");
const superagent = require("superagent");
const app = express();

app.use(express.json());

app.post("/", async (req, res, next) => {
  try {
    const breed = req.body.breed;
    const img = await superagent.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    console.log(img.body.message);
    const dogImage = img.body.message;
    res.status(200).json({
      status: "success",
      image: dogImage,
    });
  } catch (err) {
    res.status(404).json({
      status: "success",
      message: "Dog breed not found",
    });
    console.log("Dog breed not found");
  }
});

app.listen(8000, () => {
  console.log("Test Api on localhost:8000");
});
