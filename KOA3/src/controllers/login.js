var userLogin = async (ctx, next) => {
    ctx.response.body = '2222';

}

var userShortMessage = async (ctx, next) => {
    console.log(
        ' ctx.request.body :'+ctx.request.body
    );
    ctx.response.body = '1111';
}

// module.exports = {
//     'POST /userLogin': userLogin,
//     'POST /userShortMessage': userShortMessage
// }