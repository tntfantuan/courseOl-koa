var userEmail = () => {
    // var user_mation = req.body;
    // var transporter = nodemailer.createTransport({
    //     service: 'qq',
    //     auth: {
    //         user: '38857398@qq.com',
    //         pass: 'hcsexhnpbgjvbgcj' //授权码,通过QQ获取

    //     }
    // });

    // var html_user_mation = '<p>姓名:' + user_mation.name + '</p>' + '<p>邮箱:' + user_mation.email + '</p><p>电话:' + user_mation.phone + '</p><p>内容:' + user_mation.pot_content + '</p>';
    // var mailOptions = {
    //     from: '38857398@qq.com',
    //     to: 'bd@blackcube.design',
    //     subject: 'black cube 项目提交通知',
    //     html: html_user_mation
    // };

    // transporter.sendMail(mailOptions, function (err, info) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     res.end("200");

    // });
}

module.exports = {
    userEmail
}