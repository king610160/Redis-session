const cors = require('cors')
const whitelist = new Set(['https://example1.com', 'https://example2.com'])

const corsOption = {
    optionsSuccessStatus: 200,
    origin: function (origin, callback) {
        if (whitelist.has(origin)) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
    // credentials: true // cross-origin check
    // if we need the sub-domain also can run, need to do this setting
    // the frontend also need to set withCredentials too
}

module.exports = cors(corsOption)