import jwt = require("jwt-simple")
import randToken = require("rand-token")
import moment = require("moment")

const createTokens = (_id, rol) => {
	const payload = {
		_id,
		rol,
		iat: moment().unix(),
		exp: moment().add(10, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, "akdki3893838383")
	const refreshToken = randToken.uid(256)

	return { accessToken, refreshToken }
}

export { createTokens }