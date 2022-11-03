    function Name() {
        // 验证姓名
        var name = document.getElementById("name").value; //获取你所填写的信息
        var provide_name = document.querySelector('.first');
        var nameReg = /^[\u4e00-\u9fa5]{2,6}$/; //定义约束,要求输入2到6个中文
        if (!nameReg.test(name)) { //判断
            provide_name.innerHTML = "(T-T)...请输入2~6个汉字 "; //输入不合法，则显示提示信息
            provide_name.style.color = "red"
            return false;
        } else {
            provide_name.innerHTML = "这名字帅呆了^-^！"; //验证通过后提示
            provide_name.style.color = "green"
            return true;
        }
    }

    function Tel() {
        // 验证电话号码
        var tele = document.getElementById("telephone").value; //获取你所填写的信息
        var provide_tele = document.querySelector('.second');
        var teleReg = /^1[3-9][0-9]{9}$/; //定义约束,要求输入2到6个中文
        if (!teleReg.test(tele)) { //判断
            provide_tele.innerHTML = "(T-T)...请输入正确的手机号 "; //输入不合法，则显示提示信息
            provide_tele.style.color = "red"
            return false;
        } else {
            if (tele == 13261833073) {
                provide_tele.innerHTML = "一看这就是幸运号码^-^！"; //验证通过后提示
                provide_tele.style.color = "green"
            } else {
                provide_tele.innerHTML = "这个号码真不错^-^！"; //验证通过后提示
                provide_tele.style.color = "green"
            }
            return true;
        }
    }

    function Mail() {
        //邮箱验证
        var email = document.getElementById("mail").value;
        var provide_mail = document.querySelector('.third');
        var mailreg = /^[\w\d]{1,9}@[\w\d]{1,9}\.[\w]{2,3}$/;
        if (!mailreg.test(email)) {
            provide_mail.innerHTML = "真笨!你要输入这样的:jack@163.com";
            provide_mail.style.color = "red"
            return false;
        } else {
            provide_mail.innerHTML = "我去，你好厉害！！";
            provide_mail.style.color = "green"
            return true;
        }
    }

    function Code() {
        //验证身份证号（15位数或者是18位数最后一位是大写字母X）
        var num = document.getElementById("number").value;
        var provide_num = document.querySelector('.fourth');
        var numReg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
        if (!numReg.test(num)) {
            provide_num.innerHTML = "请输入15或18位的身份证号!";
            provide_num.style.color = "red"
            return false;
        } else {
            provide_num.innerHTML = "格式正确 ^-^";
            provide_num.style.color = "green"
            return true;
        }
    }


    function password() {
        //密码
        var pwd = document.getElementById("pwd").value;
        var fifth_first = document.querySelector('.fifth-first');
        var fifth_second = document.querySelector('.fifth-second');
        var fifth_third = document.querySelector('.fifth-third');
        console.log(fifth_first);
        var box = document.querySelector('.boss')
        var pwdreg = /^[\d\w]{4,6}$/;
        var pwdreg1 = /^[\d\w]{7,9}$/;
        var pwdreg2 = /^[\d\w]{10,12}$/;
        var pwdreg3 = /^[\d\w]{4,12}$/;

        if (pwdreg3.test(pwd)) {
            if (pwdreg.test(pwd)) {
                box.innerHTML = "";
                fifth_first.style.opacity = 1;
                return true;
            }
            if (pwdreg1.test(pwd)) {
                box.innerHTML = "";
                fifth_first.style.opacity = 1;
                fifth_second.style.opacity = 1;
                return true;
            }
            if (pwdreg2.test(pwd)) {
                box.innerHTML = "";
                fifth_first.style.opacity = 1;
                fifth_second.style.opacity = 1;
                fifth_third.style.opacity = 1;
                return true;
            }
        }
        if (!pwdreg3.test(pwd)) {
            box.innerHTML = "请输入4-12位密码!";
            fifth_first.style.opacity = 0;
            fifth_second.style.opacity = 0;
            fifth_third.style.opacity = 0;
            return false;
        }
    }

    function password1() {
        //确认密码
        var pwd = document.getElementById("pwd").value;
        var pwd1 = document.getElementById("pwd1").value;
        var provide_pwd = document.querySelector('.sixth');
        if (pwd != pwd1) {
            provide_pwd.innerHTML = "两次输入不一致";
            return false;
        } else {
            provide_pwd.innerHTML = "格式正确";
            provide_pwd.style.color = "green";
            return true;
        }
    }

    // function dail() {
    // var names = document.querySelector('.aaa');
    // var dali = document.querySelector('.dali').querySelector('a');
    // console.log(names.checked)
    // if (names.checked == true) {
    //     alert("11111")
    //     dali.href = "www.qq.com";
    // } else {
    //     alert("ssssss");
    // }
    // }