const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.get('/api', (req, res) => {
    res.send({message: "Hey I am working Piyush Goyal"})
})

app.listen(PORT, () => console.log(`I Am Running PORT On ${PORT}`));