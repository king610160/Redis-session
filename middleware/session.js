const session = require('express-session')
const connectRedis = require('connect-redis')
const RedisStore = connectRedis(session)
const client = require('../db/redis')

// use connect-redis for saving session in redis
// if version is 6 or below, should write connectRedis(session)

module.exports = session({
    store: new RedisStore({
        client: client,
        ttl: 60 * 60 // this is count by second
    }),
    secret: 'my_secret',
    saveUninitialized: false,
    resave: false,
    name: 'sessionId' ,
    cookie: {
        secure: false, // when deploy, need to change it to true, to accept https only
        httpOnly: true, // if true, prevent client side JS from reading the cookie
        // maxAge: 1000 * 60 * 30 // session max age in millsecond
    }
})
