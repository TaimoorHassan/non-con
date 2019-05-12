import express from "express";
const app = express();
const port = 8080;

app.get("/", (x, y) => {
    y.send("Hello");
});

app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log("Server Started @ http://localhost:${ port }");
});
