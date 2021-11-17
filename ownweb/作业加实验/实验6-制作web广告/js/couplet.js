// 189000848-胡清清
let cp_width = "100px";
let cp_height = "250px";
let cp_img = "img/ad1.jpg";
let close_img = "img/close.png";


//创造左边的广告盒子
let cp_left = document.createElement("div"); //创建div标签
cp_left.style.width = cp_width; //赋值
cp_left.style.height = cp_height;//赋值
cp_left.style.padding = "0px"; //设置样式
cp_left.style.position = "absolute"; //绝对定位
cp_left.style.left = "30px"; //距离左边30
cp_left.style.top = "30px";//距离上边30


//创造右边的广告盒子
let  cp_right = document.createElement("div");
cp_right.style.top = "0px";//距离上边0
cp_right.style.position = "absolute";//绝对定位

//适应窗口
setInterval(() => {
   
    cp_right.style.left = window.innerWidth - 200 + "px";
},1);


//创建img标签
let adimg = document.createElement("img");
adimg.src = cp_img; //给地址
cp_left.appendChild(adimg); //添加子标签


//创建img标签
let closeing = document.createElement("img");
closeing.src = close_img; //给地址
closeing.style.width = "50px";//宽50
closeing.style.position = "relative"; //相对定位
closeing.style.left = "50px";//距离左侧50
closeing.style.top = "-20px";//距离顶部-20
closeing.style.cursor = "pointer";//鼠标样式为手型
cp_left.appendChild(closeing);//添加子标签



// document.documentElement.appendChild(cp_left);//添加到网页中
window.setTimeout('document.documentElement.appendChild(cp_left)', 1000);//1秒后弹出广告

cp_right.appendChild(cp_left.cloneNode(true)); //克隆左侧广告


// document.documentElement.appendChild(cp_right);//添加到网页中
window.setTimeout('document.documentElement.appendChild(cp_right)', 1000);//1秒后弹出广告

//广告左侧关闭
closeing.addEventListener("click", function () {
    cp_left.style.display = "none";
});

//右侧关闭
cp_right.addEventListener("click", function () {
    cp_right.style.display = "none";
});



//制作右下角广告
let b_width = "300px";
let b_height = "250px";
let b_img = "img/ad2.jpg";

//创建盒子
let b_ad2 = document.createElement("div");
b_ad2.style.width = b_width;
b_ad2.style.height = b_height;
b_ad2.style.padding = "0px"; //设置样式

//适应窗口
setInterval(() => {
    b_ad2.style.position = "absolute"; //绝对定位
    b_ad2.style.left = window.innerWidth-330 + "px"; //距离左边
    b_ad2.style.bottom = 0 + "px";//距离上边
}, 1);


//创建img标签
let bimg = document.createElement("img");
bimg.src = b_img; //给地址
b_ad2.appendChild(bimg); //添加子标签


//创建img标签
let bcloseing = document.createElement("img");
bcloseing.src = close_img; //给地址
bcloseing.style.width = "50px";//宽50
bcloseing.style.position = "relative"; //相对定位
bcloseing.style.left = "250px";//距离左侧250
bcloseing.style.top = "-255px";//距离顶部-255
bcloseing.style.cursor = "pointer";//鼠标样式为手型

b_ad2.appendChild(bcloseing);//添加子标签


// document.documentElement.appendChild(b_ad2);//添加到网页中
window.setTimeout('document.documentElement.appendChild(b_ad2)', 1000); //1秒后跳出广告

bcloseing.addEventListener("click", () => {
    b_ad2.style.display = "none";
});



//滚动条
window.addEventListener("scroll", function () {
    let st1 = document.documentElement.scrollTop || document.body.scrollTop;
    cp_left.style.top = (st1 + 30) + "px";
    cp_right.style.top = st1 + "px";
    b_ad2.style.top = (st1 + (window.innerHeight-250)) + "px";
});


