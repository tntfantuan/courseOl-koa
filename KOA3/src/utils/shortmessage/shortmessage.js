
let Core = require('@alicloud/pop-core');

let shortMessage = (userPhone, randomVarification) => {
    /* 您的验证码为${wx_varification}，该验证码5分钟内有效，请勿泄漏于他人。 */
    var client = new Core({
        accessKeyId: '',
        accessKeySecret: '',
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    });
    var params = {
        "PhoneNumbers": "" + userPhone + "",
        "SignName": "萤火学院",
        "TemplateCode": "SMS_165119077",
        "TemplateParam": "{wx_varification:" + randomVarification + "}"
    }
    var requestOption = {
        method: 'POST'
    };
    client.request('SendSms', params, requestOption).then((results) => {
        // res.send(userVarification);
        // ctx.response.body = randomVarification;
    }, (ex) => {
        console.log(ex);
    });

    // return new Promise((resolve, reject) => {
    //     let showMessage = http.request(userPhone, (error, results) => {
    //         if (error) reject('error:' + error);
    //         else {
    //             console.log('2323232424ewewewew-------' + randomVarification);

    //             resolve(randomVarification);
    //         }
    //     });
    //     showMessage(userPhone);
    // });
}

module.exports = {
    shortMessage
}
