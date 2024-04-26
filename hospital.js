const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];
console.log(users[0]);
console.log(users[0].kidneys.length);
console.log(users[0].kidneys[0].healthy);

app.use(express.json());

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  //res.send("hello "+ johnKidneys[0].healthy + "  " + johnKidneys[1].healthy);
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (johnKidneys[i].healthy == true) {
      noOfHealthyKidneys++;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.listen(3000);
