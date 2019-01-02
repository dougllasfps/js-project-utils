const jwt = require('jsonwebtoken')
const authProps = require('./authProperties.json')

const {signingKey} = authProps

const gerarToken = (usuario) => {
    return jwt.sign({id: usuario.id}, signingKey, {
        expiresIn: 18000//30 minutos em segundos
    })
}

const autenticarToken = (token) => {
    return jwt.verify(token, signingKey, (error, decoded) => {
        if(error) {
            return {valid: false};
        }else{
            return {valid: true, id: decoded.id}
        }
    })
}

module.exports = {
    gerarToken,
    autenticarToken
}