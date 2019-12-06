let randomVarificationnumber = require('../utils/randomkey/randomVarification')
let shortMessage = require('../utils/shortmessage/shortmessage');

var userVarification = async (ctx, next) => {
    let userPhone = ctx.request.body[0].userPhone;
    let randomVarification = randomVarificationnumber.randomVarification(false, 5);

    // shortMessage.shortMessage(userPhone,randomVarification);
    ctx.response.body = randomVarification;
}

module.exports = {
    'POST /userVarification': userVarification
}