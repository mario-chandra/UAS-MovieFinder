const express = require("express");
const app = express();

const fetch = require("node-fetch");

app.get("/movies/title/:search_title", function (req, res) {
  fetch(
    "http://www.omdbapi.com/?apikey=2ee0025f&s=" + req.params.search_title,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => console.log(err));
});

app.get("/movies/id/:search_id", function (req, res) {
  fetch("http://www.omdbapi.com/?apikey=2ee0025f&i=" + req.params.search_id, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => console.log(err));
});

app.get("/movies/title/:search_title/:year", function (req, res) {
  fetch(
    "http://www.omdbapi.com/?apikey=2ee0025f&s=" + req.params.search_title+"&y="+req.params.type ,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => console.log(err));
});



const server = app.listen(3000, function () {
  const port = server.address().port;
  console.log("Mario app listening at http://localhost:%s", port);
});
