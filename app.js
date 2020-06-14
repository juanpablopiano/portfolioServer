const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/api", (req, res) => {
	res.json({
		hola: "Hola mundo",
		name: "Juan",
		lastName: "Gonzalez",
		title: "Portfolio",
	});
});



app.listen(process.env.PORT, () =>
	console.log("Portfolio is listening.")
);
