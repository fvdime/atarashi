const jwt = require('jsonwebtoken')

const generateAccessToken = (user : any) => {
  return (
    jwt.sign({...user}, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: '30d'})
    )
}

const generateRefreshToken = (user: any) => {
  return (
    jwt.sign({...user}, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn: '52w'})
    )
}

module.exports = { generateAccessToken, generateRefreshToken }