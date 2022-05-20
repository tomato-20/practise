const resetPasswordServices = require('../services/ResetPassword');

exports.requestResetPassword = (req,res,next) => {
    resetPasswordServices.requestResetPassword(req.body.email)
    .then(data => {res.json(data)})
    .catch(error=> {next(error)})
}

exports.resetPassword = (req,res,next) => {
    const {password} = req.body
    const {userid, token} = req.params
    resetPasswordServices.resetPassword(userid, token, password)
    .then(data=>{res.json(data)})
    .catch(error=>{next(error)})
}