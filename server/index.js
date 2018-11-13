const express = require ("express");

const app = express();

app.use(express.static("www"));

app.listen(5000,()=>{
    console.log("listening on localhost 5000")
});

