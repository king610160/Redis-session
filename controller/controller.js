const authService = require('../service/auth')

class Controller {
    static async login (req, res) {
        const { email, password } = req.body
        // do some check
        if (!email || !password) return res.status(400).send('Bad request, please fill the email and password')

        try {
            const user = await authService.login(email, password)
            req.session.user = user
            // if only res.status(XXX), but no .json or .send, it will keep running
            res.status(204)
        } catch(err) {
            // in prod, do not use console.log/error
            // use a proper loggiing library like winston
            console.error(err)
            return res.status(401).json(err)
        }

        // and pass the check
        // req.session.clientID = email
        res.json(`You are login in now!`)
    }
    static profile (req, res) {
        res.json(req.session)
    }
}

module.exports = Controller