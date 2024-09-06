function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var usex = document.registration.sex;
    var uenglish = document.registration.english;
    var unonenglish = document.registration.nonEnglish;
    var uabout = document.registration.about;
}

function userIdValidation(uid, min, max){
    var value = /^[A-Za-z0-9]+$/
    var u_len = uid.value.length;
}