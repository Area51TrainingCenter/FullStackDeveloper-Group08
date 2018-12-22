import jwt = require("jwt-simple")
import randToken = require("rand-token")
import moment = require("moment")

const createTokens = (_id, rol) => {
	const payload = {
		_id,
		rol,
		iat: moment().unix(),
		exp: moment().add(30, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, "akdki3893838383")
	const refreshToken = randToken.uid(256)

	return { accessToken, refreshToken }
}

const decodificarAccessToken = accessToken => {
	const promesa = new Promise((resolve, reject) => {

		try {
			const payload = jwt.decode(accessToken, "akdki3893838383")
			resolve(payload)
		} catch (error) {
			if (error.message.toLowerCase() == "token expired") {
				reject({
					status: 401,
					message: "token has expired"
				})
			} else {
				reject({
					status: 500,
					message: "token is invalid"
				})
			}
		}

	})

	return promesa
}

export { createTokens, decodificarAccessToken }