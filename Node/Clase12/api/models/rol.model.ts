import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	rol: String
})

const Rol = mongoose.model("Rol", esquema)

export default Rol