const bcrypt = require('bcrypt')

const users = {
    'user1@productcoder.com': {
        hashpw: bcrypt.hash('user1', 10),
        id: '1',
        role: ['ADMIN']
    },
    'user2@productcoder.com': {
        hashpw: bcrypt.hash('user2', 10),
        id: '2',
        role: ['MANAGER']
    },
    "user1234@gmail.com": {
        password:'1234',
        id: '3',
        role: ['USER']
    }
}

// if this database find, need to be async
async function findByEmail(email) {
    const user =  users[email]
    // if not found
    return user ? user : Promise.reject('User not found') 
}

module.exports = { findByEmail }