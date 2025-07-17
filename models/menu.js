const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	taste: {
		type: String,
		enum: ["Spicy", "Sour", "Tangy", "Mild", "Sweet"],
	},
	is_drink: {
		type: Boolean,
		default: false,
	},
	ingredients: {
		type: [String],
		default: [],
	},
	sales: {
		type: Number,
		default: 0,
	},
});

const Menu = mongoose.model("Menu", menuSchema, "MenuItems"); // Last one is collection name

module.exports = {
	Menu,
};
