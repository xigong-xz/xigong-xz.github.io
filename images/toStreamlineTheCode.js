// var last_left = document.querySelector('.name-left');
// var last_right = document.querySelector('.name-right');
// var name_middle = document.querySelector('.name-middle');
// var middle_first_box = document.querySelector('.middle-first-box');
// var middle_second_box = document.querySelector('.middle-second-box');
// var middle_third_box = document.querySelector('.middle-third-box');
// var middle_fourth_box = document.querySelector('.middle-fourth-box');
// var middle_fifth_box = document.querySelector('.middle-fifth-box');
// var middle_sixth_box = document.querySelector('.middle-sixth-box');
// var middle_seven_box = document.querySelector('.middle-seven-box');
// var middle_eight_box = document.querySelector('.middle-eight-box');


// var m = 0;
// last_right.onclick = function() {
//     for (let i = 0; i < 8; i += 2) {
//         name_middle.children[i].style.opacity = 0;
//         name_middle.children[i + 1].style.opacity = 0;
//         name_middle.children[i].style.transform = 'translate3d(-150px, 0, 0)';
//         name_middle.children[i + 1].style.transform = 'translate3d(150px, 0, 0)';
//     }
//     ha = setInterval(function() {
//         console.log(m)
//         name_middle.children[m].style.opacity = 1;
//         name_middle.children[m + 1].style.opacity = 1;
//         name_middle.children[m].style.transform = 'translate3d(0, 0, 0)';
//         name_middle.children[m + 1].style.transform = 'translate3d(0, 0, 0)';
//         clearInterval(ha);
//     }, 800);
//     m += 2;
//     if (m == 8) {
//         m = 0;
//     }
//     return m;
// }
// last_left.onclick = function() {
//         if (m == 0) {
//             m = 8;
//         }
//         for (let i = 7; i >= 0; i -= 2) {
//             name_middle.children[i].style.opacity = 0;
//             name_middle.children[i - 1].style.opacity = 0;
//             name_middle.children[i - 1].style.transform = 'translate3d(-150px, 0, 0)';
//             name_middle.children[i].style.transform = 'translate3d(150px, 0, 0)';
//         }
//         ha = setInterval(function() {
//             name_middle.children[m - 1].style.opacity = 1;
//             name_middle.children[m - 2].style.opacity = 1;
//             name_middle.children[m - 1].style.transform = 'translate3d(0, 0, 0)';
//             name_middle.children[m - 2].style.transform = 'translate3d(0, 0, 0)';
//             clearInterval(ha);
//         }, 800);
//         m -= 2;
//         if (m == 0) {
//             m = 8;
//         }
//         return m;
//     }
// var m = 0;
// last_right.onclick = function() {
//     if (m == 0) {
//         middle_first_box.style.opacity = 0;
//         middle_second_box.style.opacity = 0;
//         middle_first_box.style.transform = 'translate3d(-150px, 0, 0)';
//         middle_second_box.style.transform = 'translate3d(150px, 0, 0)';
//         ha = setInterval(function() {
//             middle_third_box.style.opacity = 1;
//             middle_fourth_box.style.opacity = 1;
//             middle_third_box.style.transform = 'translate3d(0px, 0, 0)';
//             middle_fourth_box.style.transform = 'translate3d(0px, 0, 0)';
//             clearInterval(ha);
//         }, 800);
//         return m = 1;
//     }

//     if (m == 1) {
//         middle_third_box.style.opacity = 0;
//         middle_fourth_box.style.opacity = 0;
//         middle_third_box.style.transform = 'translate3d(-150px, 0, 0)';
//         middle_fourth_box.style.transform = 'translate3d(150px, 0, 0)';
//         ha_1 = setInterval(function() {
//             middle_fifth_box.style.opacity = 1;
//             middle_sixth_box.style.opacity = 1;
//             middle_fifth_box.style.transform = 'translate3d(0, 0, 0)';
//             middle_sixth_box.style.transform = 'translate3d(0, 0, 0)';
//             clearInterval(ha_1);
//         }, 800);
//         return m = 2;
//     }

//     if (m == 2) {
//         middle_fifth_box.style.opacity = 0;
//         middle_sixth_box.style.opacity = 0;
//         middle_fifth_box.style.transform = 'translate3d(-150px, 0, 0)';
//         middle_sixth_box.style.transform = 'translate3d(150px, 0, 0)';
//         ha_2 = setInterval(function() {
//             middle_seven_box.style.opacity = 1;
//             middle_eight_box.style.opacity = 1;
//             middle_seven_box.style.transform = 'translate3d(0, 0, 0)';
//             middle_eight_box.style.transform = 'translate3d(0, 0, 0)';
//             clearInterval(ha_2);
//         }, 800);
//         return m = 3;
//     }

//     if (m == 3) {
//         middle_seven_box.style.opacity = 0;
//         middle_eight_box.style.opacity = 0;
//         middle_seven_box.style.transform = 'translate3d(-150px, 0, 0)';
//         middle_eight_box.style.transform = 'translate3d(150px, 0, 0)';
//         ha_3 = setInterval(function() {
//             middle_first_box.style.opacity = 1;
//             middle_second_box.style.opacity = 1;
//             middle_first_box.style.transform = 'translate3d(0, 0, 0)';
//             middle_second_box.style.transform = 'translate3d(0, 0, 0)';
//             clearInterval(ha_3);
//         }, 800);
//         return m = 0;
//     }
// }


// if (m == 0) {
//     middle_first_box.style.opacity = 0;
//     middle_second_box.style.opacity = 0;
//     middle_first_box.style.transform = 'translate3d(-150px, 0, 0)';
//     middle_second_box.style.transform = 'translate3d(150px, 0, 0)';
//     ha = setInterval(function() {
//         middle_seven_box.style.opacity = 1;
//         middle_eight_box.style.opacity = 1;
//         middle_seven_box.style.transform = 'translate3d(0, 0, 0)';
//         middle_eight_box.style.transform = 'translate3d(0, 0, 0)';
//         clearInterval(ha);
//     }, 800);
//     return m = 3;
// }

// if (m == 3) {
//     middle_seven_box.style.opacity = 0;
//     middle_eight_box.style.opacity = 0;
//     middle_seven_box.style.transform = 'translate3d(-150px, 0, 0)';
//     middle_eight_box.style.transform = 'translate3d(150px, 0, 0)';
//     ha_1 = setInterval(function() {
//         middle_fifth_box.style.opacity = 1;
//         middle_sixth_box.style.opacity = 1;
//         middle_fifth_box.style.transform = 'translate3d(0, 0, 0)';
//         middle_sixth_box.style.transform = 'translate3d(0, 0, 0)';
//         clearInterval(ha_1);
//     }, 800);
//     return m = 2;
// }

// if (m == 2) {
//     middle_fifth_box.style.opacity = 0;
//     middle_sixth_box.style.opacity = 0;
//     middle_fifth_box.style.transform = 'translate3d(-150px, 0, 0)';
//     middle_sixth_box.style.transform = 'translate3d(150px, 0, 0)';
//     ha_2 = setInterval(function() {
//         middle_third_box.style.opacity = 1;
//         middle_fourth_box.style.opacity = 1;
//         middle_third_box.style.transform = 'translate3d(0, 0, 0)';
//         middle_fourth_box.style.transform = 'translate3d(0, 0, 0)';
//         clearInterval(ha_2);
//     }, 800);
//     return m = 1;
// }

// if (m == 1) {
//     middle_third_box.style.opacity = 0;
//     middle_fourth_box.style.opacity = 0;
//     middle_third_box.style.transform = 'translate3d(-150px, 0, 0)';
//     middle_fourth_box.style.transform = 'translate3d(150px, 0, 0)';
//     ha_3 = setInterval(function() {
//         middle_first_box.style.opacity = 1;
//         middle_second_box.style.opacity = 1;
//         middle_first_box.style.transform = 'translate3d(0, 0, 0)';
//         middle_second_box.style.transform = 'translate3d(0, 0, 0)';
//         clearInterval(ha_3);
//     }, 800);
//     return m = 0;
// }



// char(x);函数的封装


// if (m == 2) {
//     last_left.children[1].innerHTML = "晴明";
//     last_right.children[1].innerHTML = "源博雅";
// } else if (m == 3) {
//     last_left.children[1].innerHTML = "神乐";
//     last_right.children[1].innerHTML = "八百比丘尼";
// } else if (m == 4) {
//     last_left.children[1].innerHTML = "源博雅";
//     last_right.children[1].innerHTML = "晴明";
// } else if (m == 1) {
//     last_left.children[1].innerHTML = "八百比丘尼";
//     last_right.children[1].innerHTML = "神乐";
// }








var m = 1; //初始化m=0；
var circle = 0; //控制上面名字的播放

last_right.onclick = function() {
    m += 1;
    if (m == 5) {
        m = 1
    }
    fore(0); //同233-235行操作
    mechime(2 * m);
    char(m);
}
}

last_left.onclick = function() {
    m--;
    if (m == 0) {
        m = 4;
    }
    for (let i = 7; i >= 0; i -= 2) {
        name_middle.children[i].style.opacity = 0;
        name_middle.children[i - 1].style.opacity = 0;
        name_middle.children[i - 1].style.transform = 'translate3d(-150px, 0, 0)';
        name_middle.children[i].style.transform = 'translate3d(150px, 0, 0)';
    }
    mechime(2 * m);
    char(m);
}
}