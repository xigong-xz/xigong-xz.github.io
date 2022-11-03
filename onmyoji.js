window.addEventListener('load', function() {

    // 游戏下拉菜单
    var nav = document.querySelector('.top-nav-1');
    var menue = document.querySelector('.menue');
    nav.addEventListener('mouseover', function() {
        menue.style.height = 500 + "px";
        menue.style.display = 'block';
    })

    // 左上角的图标显现
    nav.addEventListener('mouseout', function() {
            menue.style.height = 0 + "px";
        })
        //获取元素
    var er = document.querySelector('.er');

    //页面滚动事件 scroll
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 100) {
            er.style.opacity = 1;
            er.style.transform = 'translateY(20px)';
        } else {
            er.style.opacity = 0;
            er.style.transform = 'translateY(0px)';
        }
    })

    // 新闻资讯，新服集结
    var centerfoot = document.querySelector('.center-foot');
    var banner = document.querySelector('.banner');
    var app = document.querySelector('.app');
    var boy = document.querySelector('.boy');

    app.addEventListener('click', function() {
        app.style.display = 'none';
        boy.style.display = 'block'
        centerfoot.style.display = 'none';
        banner.style.display = 'block';
    })

    boy.addEventListener('click', function() {
        app.style.display = 'block';
        boy.style.display = 'none';
        centerfoot.style.display = 'block';
        banner.style.display = 'none';
    })

    // 游戏攻略
    var one = document.querySelector('.blue');
    var red = document.querySelector('.red');
    var game_foot = document.querySelector('.game-foot');
    for (let i = 0; i < red.children.length; i++) {
        red.children[i].addEventListener('mouseenter', function() {
            red.children[i].style.opacity = 0;
            one.children[i].style.opacity = 1;
        })
        red.children[i].addEventListener('mouseleave', function() {
            red.children[i].style.opacity = 1;
            one.children[i].style.opacity = 0;
        })
    }
    for (let i = 0; i < red.children.length; i++) {
        red.children[i].addEventListener('mouseenter', function() {
            //排他思想  先把其他的透明度和层级变成最底层   然后把需要的透明度和层级调高
            for (let i = 1; i < red.children.length + 1; i++) {
                game_foot.children[i].style.opacity = 0;
                game_foot.children[i].style.zIndex = 1;
            }
            game_foot.children[i + 1].style.opacity = 1;
            game_foot.children[i + 1].style.zIndex = 2;
        })
    }

    // 新闻资讯，新服集结里面的轮播图
    var firstup = document.querySelector('.first-up');
    var firstdown = document.querySelector('.first-down');
    var ul = banner.querySelector('ul');
    var lenght = ul.offsetLeft;
    if (lenght == 0) {
        firstup.style.display = 'none';
    }

    function animate(obj, target, callback) {
        //先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            //步长值写到定时器的里面
            //把我们的步长值改为整数，不要出现小数的问题
            var step = (target - obj.offsetLeft);
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                //停止动画的本质是停止定时器
                clearInterval(obj.timer);
                //回调函数写到定时器结束里面
                if (callback) {
                    //回调函数
                    callback();
                }
            }
            //把每次加1，这个步长值改为一个慢慢变小的值  步长值公式：（目标值-现在的位置）/10.
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15)
    }

    var flag = true;
    firstup.addEventListener('click', function() {
        if (flag) {
            flag = false;
            animate(ul, ul.offsetLeft + 1033, function() {
                flag = true;
            });
            if (ul.offsetLeft >= -1033) {
                firstup.style.display = 'none';
            }
            if (ul.offsetLeft >= -2066) {
                firstdown.style.display = 'block';
            }
        }
    })

    firstdown.addEventListener('click', function() {
        if (flag) {
            flag = false;
            animate(ul, ul.offsetLeft - 1033, function() {
                flag = true;
            });
            if (ul.offsetLeft >= 0) {
                firstup.style.display = 'block';
            }
            if (ul.offsetLeft < 0) {
                firstdown.style.display = 'none';
            }
        }
    })

    setInterval(function() {
        if (ul.offsetLeft >= -1033) {
            if (ul.offsetLeft >= 0) {
                firstup.style.display = 'block';
            }
            if (ul.offsetLeft <= -1033) {
                firstdown.style.display = 'none';
            }
            ul.style.left = ul.offsetLeft - 1033 + 'px';
        }
        if (ul.offsetLeft <= -2066) {
            if (ul.offsetLeft >= -2066) {
                firstdown.style.display = 'block';
            }
            firstup.style.display = 'none';
            ul.style.left = ul.offsetLeft + 2066 + 'px';
        }

    }, 8000)

    // 平安世界
    //尽量用for循环
    var ul_a = document.querySelector('.formula-nav').querySelector('ul');
    var formula_name = document.querySelector('.formula-name');
    var formula_protagonist = document.querySelector('.formula-protagonist');
    // 先将第一个设置成默认背景颜色
    ul_a.children[0].style.backgroundColor = '#c2a060';
    formula_protagonist.style.opacity = 1;
    formula_name.style.opacity = 0;
    //  排他思想
    for (var i = 0; i < ul_a.children.length; i++) {
        ul_a.children[i].addEventListener('click', function() {
            for (var i = 0; i < ul_a.children.length; i++) { // 现将所有的背景颜色都设置成无
                ul_a.children[i].style.backgroundColor = '';
            }
            this.style.backgroundColor = "#c2a060" // 之后再设置成既定颜色
        })
    }

    function a(i = 1) {
        console.log(i);

    }
    a(4);




    ul_a.children[0].addEventListener('click', function() {
        formula_protagonist.style.opacity = 1;
        formula_name.style.opacity = 0;
    })
    ul_a.children[1].addEventListener('click', function() {
        formula_protagonist.style.opacity = 0;
        formula_name.style.opacity = 1;
    })

    var last_left = document.querySelector('.name-left');
    var last_right = document.querySelector('.name-right');
    var name_middle = document.querySelector('.name-middle');
    var h_4 = document.querySelector(".formula-protagonist").querySelectorAll('h4');
    //封装左右文字切换
    function char(x) {
        if (x == 1) {
            last_left.children[1].innerHTML = "八百比丘尼";
            last_right.children[1].innerHTML = "神乐";
        } else if (x == 2) {
            last_left.children[1].innerHTML = "晴明";
            last_right.children[1].innerHTML = "源博雅";
        } else if (x == 3) {
            last_left.children[1].innerHTML = "神乐";
            last_right.children[1].innerHTML = "八百比丘尼";
        } else if (x == 4) {
            last_left.children[1].innerHTML = "源博雅";
            last_right.children[1].innerHTML = "晴明";
        }
    }
    //封装for循环
    function fore(u) {
        for (let i = u; i < 8; i += 2) {
            name_middle.children[i].style.opacity = 0;
            name_middle.children[i + 1].style.opacity = 0;
            name_middle.children[i].style.transform = 'translate3d(-150px, 0, 0)';
            name_middle.children[i + 1].style.transform = 'translate3d(150px, 0, 0)';
        }
    }
    //封装定时器
    function mechime(w) {
        ha = setInterval(function() {
            name_middle.children[w - 2].style.opacity = 1;
            name_middle.children[w - 1].style.opacity = 1;
            name_middle.children[w - 2].style.transform = 'translate3d(0, 0, 0)';
            name_middle.children[w - 1].style.transform = 'translate3d(0, 0, 0)';
            flag1 = true
            clearInterval(ha);
        }, 700);
    }
    h_4[0].style.color = '#c2a060';
    for (let i = 0; i < h_4.length; i++) {
        //记录当前名字所代表的索引号  通过自定义属性来做
        h_4[i].setAttribute('index', i + 1);
        h_4[i].addEventListener('click', function() {
            for (let i = 0; i < h_4.length; i++) { // 现将所有的背景颜色都设置成无
                h_4[i].style.color = 'black';
            }
            this.style.color = "#c2a060" // 之后再设置成既定颜色
            var index = this.getAttribute('index') * 2;
            fore(0); //排他思想，把所有装图片的盒子都移到两边隐藏起来
            mechime(index); //封装点击后八秒后出来的操作，装图片的盒子从两边出来
            char(index * 2); //判断对应图片所对应的文字
            circle = index / 2 - 1; //上面文字的索引赋值给变量circle和m
            m = index / 2;
        })
    }

    var m = 1; //初始化m=0；
    var circle = 0; //控制上面名字的播放
    var flag1 = true;
    last_right.onclick = function() {
        if (flag1 == true) {
            flag1 = false;
            circle++
            for (let i = 0; i < 4; i++) {
                h_4[i].className = '';
                h_4[i].style.color = '';
            }
            if (circle == 4) {
                circle = 0;
            }
            h_4[circle].className = 'currents';
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
        if (flag1 == true) {
            flag1 = false;
            circle--;
            if (circle < 0) {
                circle = 3;
            }
            for (let i = 0; i < 4; i++) {
                h_4[i].className = '';
                h_4[i].style.color = '';
            }
            h_4[circle].className = 'currents';
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


    //同人手账---换图片
    var changess = document.querySelector('.people-middle-footer').querySelector('span');
    var pictures = document.querySelector('.people-middle-middle-first').querySelectorAll('img');
    var chatter = document.querySelector('.small-foot').querySelectorAll('h4');
    var charter = document.querySelector('.small-foot').querySelectorAll('h6');
    var v = 0;
    changess.addEventListener('click', function() {
        if (v == 0) {
            pictures[0].src = "images/friend-1-1.jpg";
            pictures[1].src = "images/friend-1-2.jpg";
            pictures[2].src = "images/friend-1-3.jpg";
            chatter[0].innerHTML = '带领百鬼随行';
            chatter[1].innerHTML = '双份可爱';
            chatter[2].innerHTML = 'COS：鬼女红叶';
            charter[0].innerHTML = '作者：椿煊';
            charter[1].innerHTML = '作者：鲛鲛钥匙链';
            charter[2].innerHTML = '作者：面对现实的中二病网友';
            return v = 1;
        }
        if (v == 1) {
            pictures[0].src = "images/friend-1.jpg";
            pictures[1].src = "images/friend-2.jpg";
            pictures[2].src = "images/friend-3.jpg";
            chatter[0].innerHTML = ' 漫画：祢豆子，太可爱了';
            chatter[1].innerHTML = ' 书写命运';
            chatter[2].innerHTML = ' 式神故事：鬼使黑';
            charter[0].innerHTML = '作者：枫雨木木';
            charter[1].innerHTML = '作者：青春迈克尔';
            charter[2].innerHTML = '作者：非洲首席大阴阳师';
            return v = 0;
        }
    })

    //同人大触--换图片

    var changes = document.querySelector('.circle-third').querySelector('span');
    var picture = document.querySelector('.circle-first').querySelectorAll('img');
    var character = document.querySelector('.circle-first').querySelectorAll('h4');
    var a = 0;

    changes.onclick = function() {
        if (a == 3) {
            picture[0].src = "images/carron-1.jpg";
            picture[1].src = "images/carton-2.jpg";
            picture[2].src = "images/carton-3.jpg";
            picture[3].src = "images/carton-4.jpg";
            picture[4].src = "images/carton-5.jpg";
            character[0].innerHTML = '秃头阿青丫';
            character[1].innerHTML = '鼓宜坠';
            character[2].innerHTML = 'ina喵';
            character[3].innerHTML = 'minifee324';
            character[4].innerHTML = 'ggggenii';
            return a = 0;
        }
        if (a == 0) {
            picture[0].src = "images/carton-6.jpg";
            picture[1].src = "images/carton-7.jpg";
            picture[2].src = "images/carton-8.jpg";
            picture[3].src = "images/carton-9.jpg";
            picture[4].src = "images/carton-10.jpg";
            character[0].innerHTML = '卸尔';
            character[1].innerHTML = '牌仙-';
            character[2].innerHTML = 'C名字太短';
            character[3].innerHTML = '-颜鸟-';
            character[4].innerHTML = '安小小小鱼';
            return a = 1;
        }
        if (a == 1) {
            picture[0].src = "images/carton-11.jpg";
            picture[1].src = "images/carton-12.jpg";
            picture[2].src = "images/carton-13.jpg";
            picture[3].src = "images/carton-14.jpg";
            picture[4].src = "images/carton-15.jpg";
            character[0].innerHTML = '半天腰-万顺万宜广佑大吉';
            character[1].innerHTML = '洛离-rl';
            character[2].innerHTML = '黑猫猫OvO';
            character[3].innerHTML = '-君瘾-';
            character[4].innerHTML = '白卿xh';
            return a = 2;
        }
        if (a == 2) {
            picture[0].src = "images/carton-16.jpg";
            picture[1].src = "images/carton-17.jpg";
            picture[2].src = "images/carton-18.jpg";
            picture[3].src = "images/carton-19.jpg";
            picture[4].src = "images/carton-20.jpg";
            character[0].innerHTML = '范海带viva';
            character[1].innerHTML = '_子楚';
            character[2].innerHTML = '玩泥巴的小啊泅';
            character[3].innerHTML = '黑桃-持续发糖中';
            character[4].innerHTML = '渊目-ritsu';
            return a = 3;
        }
    }

    // 视听盛宴--换图片部分
    var transmit = document.querySelector('.content-right').querySelectorAll('.transmits')
    var liss = document.querySelector('.content-right').querySelectorAll('li');

    for (let i = 0; i < liss.length; i++) {
        liss[i].addEventListener('mouseenter', function() {
            console.log(transmit[i])
            transmit[i].src = 'images/trigle.png';
        })
    }
    for (let i = 0; i < liss.length; i++) {
        liss[i].addEventListener('mouseleave', function() {
            transmit[i].src = 'images/flows.png';
        })
    }

    //泛娱乐
    var fanbigleft = document.querySelector('.fan-big-left');
    var fanbigright = document.querySelector('.fan-big-right');
    var fan = document.querySelector('.fan');
    var uls = fan.querySelector('ul');
    var lenght = uls.offsetLeft;
    if (lenght == 0) {
        fanbigleft.style.display = 'none';
    }
    var flag = true;
    fanbigleft.addEventListener('click', function() {
        if (flag) {
            flag = false;
            animate(uls, uls.offsetLeft + 235, function() {
                flag = true;
            });
        }
        if (uls.offsetLeft >= -235) {
            fanbigleft.style.display = 'none';
        }
        if (uls.offsetLeft >= -2066) {
            fanbigright.style.display = 'block';
        }
    })
    fanbigright.addEventListener('click', function() {
        console.log(ul.offsetLeft);
        if (flag) {
            flag = false;
            animate(uls, uls.offsetLeft - 235, function() {
                flag = true;
            });
        }
        if (uls.offsetLeft >= 0) {
            fanbigleft.style.display = 'block';
        }
        if (uls.offsetLeft <= -1112) {
            fanbigright.style.display = 'none';
        }
    })

    //3d旋转特效
    var oImg = document.querySelector('.street').querySelectorAll('img');
    var street = document.querySelector('.street');
    var length = oImg.length;
    var deg = 360 / length;
    var oWrap = document.getElementById('wrap');
    //遍历到所有的图片 访问一个数组或则集合中的元素  访问之后会做一字儿事情
    // 页面内容加载完毕之后  在执行的js代码
    Array.prototype.forEach.call(oImg, function(ele, index) { //self
        ele.style.transform = "rotateY(" + deg * index + "deg)translateZ(350px)";
        ele.style.transition = "1s " + (length - index) * 0.1 + "s";
    });
    //鼠标点击事件
    var newX, newY, lastX, lastY, minusX, minusY, rotX = -20,
        rotY = 0;
    street.onmousedown = function(e) {
        // 第一次就得值产生于第一次点击的时候
        lastX = e.clientX;
        lastY = e.clientY;
        this.onmousemove = function(e) {
            //鼠标移动事件
            newX = e.clientX;
            newY = e.clientY;
            //假设 求出了这个值
            minusX = newX - lastX;
            minusY = newY - lastY;
            //差值累加成为一个新的旋转度数值
            rotX -= minusY * 0.2;
            rotY += minusX * 0.2;
            oWrap.style.transform = "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
            // 新的位置值在用完之后  就变成了就得值  供下次使用
            lastX = newX;
            lastY = newY;
        }
        this.onmouseup = function(e) { //鼠标松开事件
            this.onmousemove = null; //在松开后清除鼠标移动事件
        }
    }
    var physical = document.querySelector('.physical');
    for (let i = 1; i < 3; i++) {
        physical.children[i].addEventListener('mousedown', function(e) {
            lastX = e.clientX;
            // console.log(lastX);
            this.onmousemove = function(e) {
                newX = e.clientX;
                minusX = newX - lastX;
                rotY += minusX;
                console.log(rotY);
                i = Math.floor(rotY / 1000);
                if (i == 0) {
                    this.style.opacity = (rotY * (1 / 1000));
                } else if (i > 0) {
                    this.style.opacity = (rotY * (i / (1000 * i)));
                } else {
                    this.style.opacity = (rotY * (i / (1000 * -i)));
                }
                lastX = newX;
            }
            this.onmouseup = function() { //鼠标松开事件
                if (this.style.opacity > 0.7) {
                    this.style.opacity = 1;
                } else {
                    this.style.opacity = 0;
                }
                this.onmousemove = null; //在松开后清除鼠标移动事件
            }
        })
    }
    //京都商业街模块
    var city_second = document.querySelector('.city-second');
    var city_ul = document.querySelector('.city-second').querySelector('ul');
    var city_box = document.querySelector('.city-box');
    var city_ul_with = city_ul.offsetWidth - 1060;
    var mouse1X, mouse2X, dx, mdx, dnx;
    city_box.addEventListener('mousedown', function(e) {
        var e = e || window.event;
        e.preventDefault();
        mouse1X = e.pageX;
        dx = city_box.offsetLeft;
        mdx = mouse1X - dx;
        document.addEventListener('mousemove', mouseMove2);
        document.addEventListener('mouseup', mouseUp2);
    })

    function mouseMove2(e) {
        dx = city_box.offsetLeft;
        var e = e || window.event;
        mouse2X = e.pageX;
        dnx = mouse2X - mdx;
        if (dnx < 0) {
            dnx = 0;
        } else if (dnx > 921) {
            dnx = 921;
        }
        console.log(dnx)
        city_box.style.left = dnx + "px";
        var cssIndex = (city_ul_with / 921) * dnx;
        city_ul.style.cssText = `transform:translate3d(${-cssIndex}px,0px,0px);`
    }

    function mouseUp2() {
        document.removeEventListener('mousemove', mouseMove2);
    }
    var dx;
    var city_second = document.querySelector('.city-second');
    city_second.addEventListener('mousewheel', function(e) {
            var e = e || window.event;
            e.preventDefault();
            dx = city_box.offsetLeft;
            if (dx < 10) {
                dx = 10;
            } else if (dx > 911) {
                dx = 911;
            }
            if (e.wheelDelta < 0) {
                city_box.style.left = dx + 10 + 'px';
                var cssIndex_1 = (city_ul_with / 921) * (dx + 10);
                city_ul.style.cssText = `transform:translate3d(${-cssIndex_1}px,0px,0px);
                                    transition:transform 0.8s ease-out 0s;`
            } else {
                city_box.style.left = dx - 10 + 'px';
                var cssIndex_2 = (city_ul_with / 921) * (dx - 10);
                city_ul.style.cssText = `transform:translate3d(${-cssIndex_2}px,0px,0px);
                                    transition:transform 0.8s ease-out 0s;`
            }
        })
        // 小玩偶转向问题
    var people = document.querySelector('.people-back');
    var toy = document.querySelector('.toy');
    var word_wrap = document.querySelector('.word-wrap');
    toy.onmousemove = function(e) {
        var tmm = this.getBoundingClientRect();
        tmb = e.pageX - tmm.left;
        if (tmb < 450) {
            people.style.backgroundPositionX = 0 + 'px';
        }
        if (tmb > 450 && tmb < 570) {
            people.style.backgroundPositionX = -203 + 'px';
        }
        if (tmb > 590 && tmb < 630) {
            people.style.backgroundPositionX = -406 + 'px';
        }
        if (tmb > 630 && tmb < 760) {
            people.style.backgroundPositionX = -609 + 'px';
        }
        if (tmb > 760) {
            people.style.backgroundPositionX = -812 + 'px';
        }
    }
    var h = 0;
    flag2 = true;
    people.addEventListener('click', function() {
            if (h == 6) {
                h = 0;
            }
            if (flag2 == true) {
                flag2 = false;
                h++
                for (let i = 0; i < word_wrap.children.length; i++) {
                    word_wrap.children[i].style.display = 'none';
                }
                word_wrap.children[h - 1].style.display = 'block';
                var words = setInterval(function() {
                    word_wrap.children[h - 1].style.display = 'none';
                    flag2 = true;
                    clearInterval(words);
                }, 2000);
            }
        })
        // 手风琴部分
    var lisss = document.getElementById("divbox").querySelectorAll('li'); //获取document中的所有li
    function ani(e) {
        timer = setInterval(function() { //设置定时器
            var speed = 10;
            if (parseInt(e.style.width) < 1400) { //如果传入的对象的宽小于1400px
                e.style.width = parseInt(e.style.width) + speed + 'px'; //让当前宽加speed
                speed += 100; //每执行一次定时器，speed+10
            } else {
                return;
            }
        }, 20); // 20 ms执行一次定时器
    }
    for (var i = 0; i < lisss.length; i++) { //遍历li数组
        lisss[i].index = i; //循环把i的值赋值给li的index
        var timer;
        lisss[i].onmouseenter = function() {
            for (var i = 0; i < lisss.length; i++) {
                lisss[i].style.width = '100px'; //当鼠标移入到某个li时，遍历循环数组，把所有li的宽都设置为100px
            }
            ani(lisss[this.index]); //使用ani方法，把鼠标移入的li的宽值变为1400px
        }
        lisss[i].onmouseleave = function() {
            lisss[this.index].style.width = '100px'; //鼠标移出时，把当前li的宽设置回100px
            clearInterval(timer); //清除定时器
        }
    }
    // 整个页面监听鼠标是否移动  然后对四个小妖怪的出现进行判断
    var monster = document.querySelector(".monsters");
    (function() {
        tim = null;
        window.onmousemove = function() {
            isMove = true;
            clearTimeout(tim);
            monster.style.opacity = 0; // 移动时
            tim = setTimeout(function() {
                isMove = false;
                monster.style.opacity = 1; // 静止后
            }, 6000);
        }
    }());
})




//鼠标点击事件的思路
// 1.拖拽：
// 鼠标滑过页面 相册旋转 改变的是什么值  wrap相册的
//transform rotateX & Y的值
// 怎么求这个值
// 产生在什么时候

// 产生在鼠标移动的过程中

//按下鼠标   不松开  移动过程中计算 松开之后  就停止计算

//每一次移动鼠标旋转多少
// 两次鼠标移动位置的差值  就是移动的距离
// 新的位置减去上一次的位置=差值