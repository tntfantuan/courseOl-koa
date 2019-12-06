var userShortMessage = async (ctx, next) => {
    console.log(
        ' ctx.request.body :' + ctx.request.body[0].userPhone
    );

    let userPhone = ctx.request.body[0].userPhone;
    /*
    ** randomWord 产生任意长度随机字母数字组合
    ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位               
    */
    function randomWord(randomFlag, min, max) {
        var str = "",
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        // 随机产生
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            var pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    }
    let userVarification = randomWord(false, 5);

    function verificationInfromation() {
        /* 您的验证码为${wx_varification}，该验证码5分钟内有效，请勿泄漏于他人。 */
        var client = new Core({
            accessKeyId: 'LTAIG9iy0nVsXfOf',
            accessKeySecret: '8ViL7T1PUuNRWkwcCNgiBLHSdVl9KQ',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });
        var params = {
            "PhoneNumbers": "" + userPhone + "",
            "SignName": "萤火学院",
            "TemplateCode": "SMS_165119077",
            "TemplateParam": "{wx_varification:" + userVarification + "}"
        }
        var requestOption = {
            method: 'POST'
        };
        client.request('SendSms', params, requestOption).then((results) => {
            res.send(userVarification);
        }, (ex) => {
            console.log(ex);
        });
    }
    // verificationInfromation();
    console.log(userVarification);
    ctx.response.body = userVarification;
}

module.exports = {
    'POST /userShortMessage': userShortMessage
}