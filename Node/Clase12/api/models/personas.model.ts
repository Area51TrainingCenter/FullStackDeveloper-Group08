const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	gender: String,
	name: String,
	dob: {},
	nat: String
})

esquema.statics.listaFiltradaPorNacionalidadYSexo = function (nacionalidad, sexo) {
	return this.aggregate(
		[
			{
				'$project': {
					'gender': 1,
					'name': 1,
					'dob': 1,
					'nat': 1
				}
			}, {
				'$match': {
					'gender': sexo,
					'nat': nacionalidad
				}
			}, {
				'$group': {
					'_id': {
						'edad': '$dob.age'
					},
					'cuenta': {
						'$sum': 1
					}
				}
			}
		]
	)
}

const Persona = mongoose.model("Persona", esquema)

export default Persona