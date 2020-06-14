const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", (req, res) => {
	res.render('index');
});

app.get("/api", (req, res) => {
	res.json({
		hola: "Hola mundo",
		name: "Juan",
		lastName: "Gonzalez",
		title: "Portfolio",
	});
});

app.get('*', (req, res) => {
	res.render('construction');
});

app.listen(process.env.PORT, () =>
	console.log("Portfolio is listening.")
);
