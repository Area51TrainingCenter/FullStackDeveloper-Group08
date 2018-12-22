const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	email: String,

	password: String,

	photo: String,

	rol: {
		type: mongoose.Schema.ObjectId,
		ref: "Rol"
	},

	refreshToken: String
})

function autoPoblar(next) {
	this.populate("rol")
	next()
}

esquema.pre("find", autoPoblar)
esquema.pre("findOne", autoPoblar)

const User = mongoose.model("User", esquema)

export default User