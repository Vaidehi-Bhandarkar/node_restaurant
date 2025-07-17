const express = require("express");
const router = express.Router();

const { Person } = require("./../models/Person");
const { generateToken, jwtAuth } = require("../jwt");

//User signup
router.post("/signup", async (req, res) => {
	try {
		const data = req.body;

		//If existing user
		const userExist = await Person.findOne({ username: data.username });
		if (userExist)
			return res
				.status(400)
				.json({ error: "User already exists. Please Login." });

		//Else
		const newPerson = new Person(data);
		const response = await newPerson.save();
		console.log("data saved");

		const payload = {
			id: response.id,
			name: response.username,
		};

		const token = generateToken(payload);
		console.log("Token: ", token);

		res.status(200).json({ response: response, token: token });
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

//User Login
router.get("/login", async (req, res) => {
	try {
		//Extract Username and password
		const { username, password } = req.body;
		console.log(username, password);

		//Find user by username
		const user = await Person.findOne({ username: username });

		if (!user || !(await user.comparePassword(password)))
			return res.status(401).json({ error: "Invalid Username or password" });

		//Else -> generate Token
		const payload = {
			id: user.id,
			username: user.username,
		};
		const token = generateToken(payload);

		return res.json({ token });
	} catch (err) {
		console.log({ error: err });
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("", jwtAuth, async (req, res) => {
	try {
		const data = await Person.find();
		console.log("Data Fetched");

		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

//Get profile of user logged in
router.get("/profile", jwtAuth, async (req, res) => {
	try {
		const userData = req.user;
		console.log("User data: ", userData);

		const user = await Person.findOne({ _id: userData.id });

		return res.status(200).json({ user });
	} catch (err) {
		console.log({ error: err });
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/:work", async (req, res) => {
	try {
		const workType = req.params.work;
		if (workType == "Chef" || workType == "Manager" || workType == "Owner") {
			const response = await Person.find({ designation: workType });
			console.log("Response fetch", response);
			res.status(200).json(response);
		} else {
			res.status(404).json({ error: "Invalid Designation" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

module.exports = router;
