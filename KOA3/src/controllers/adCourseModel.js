var upCourse = async (ctx, next) => {



    if (ctx.request.body != {} && ctx.request.files != undefined) {
        console.log(ctx.request.body);
        console.log(ctx.request.files);
    }
    // form.parse(ctx.req, (err, fields, files) => {
    //     // console.log(ctx.req)

    //     console.log(ctx.req.fileContent)

    // });
    ctx.response.body = '200';

}

var adCourse = async (ctx, next) => {
    console.log(ctx.request.body)
}

module.exports = {
    'POST /upC': upCourse,
    'POST /adC': adCourse
}