const userDAO = require('../dao/user')
const bcrypt = require('bcrypt')

async function login(email, password) {
    try {
        const user = await userDAO.findByEmail(email)
        const match = (password === user.password)
        if (match) return {id: user.id, roles: user.role}
        else return Promise.reject('wrong email or password.')
    } catch (err) {
        return Promise.reject('User not found.')
    }
}

module.exports = { login }