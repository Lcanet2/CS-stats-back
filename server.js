const express = require("express");
require('dotenv').config()
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/getSteamData', async (req, res) => {
    console.log(req.query.steamid);
    const response = await fetch(
        `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=`+process.env.API_KEY+`&steamid=${req.query.steamid}`
      ).then(res => res.json());
      console.log(response);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Web server is running on port ${port}`);
})