import express from "express";
import sum from "./sum.js";


const app = express();


app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/sum/:a/:b", (req, res) => {
    const {a,b}  = req.params;
    res.json({
        result: sum(Number(a), Number(b))
    })
})