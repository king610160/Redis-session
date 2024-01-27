// 4. plug in another middleware that check user is authenticated
// all request will be check by this authenticated
function authenticate(req, res, next) {
    if(!req.session || !req.session.user) {
        const err = new Error('No authouiry or session expired.')
        err.statusCode = 401
        next(err)
    }
    next()
}

module.exports = authenticate