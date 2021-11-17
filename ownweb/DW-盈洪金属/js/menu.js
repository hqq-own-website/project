// JavaScript Document
//二级菜单
var firstLi = document.querySelectorAll("#nav>ul>li");
// 通过循环给每个一级li标签都绑定鼠标移入事件
for (var i = 0; i < firstLi.length; i++) {
    firstLi[i].onmouseover = function () {
        if (this.querySelector("ul")) {
            // firstLi[i]已经不是当前的了，this是当前的
            var secUL = this.querySelector("ul");
            // 获得当前二级菜单中的li标签个数
            secUL.style.display = "block";
        }
    }
    firstLi[i].onmouseout = function () {
        if (this.querySelector("ul")) {
            // firstLi[i]已经不是当前的了，this是当前的
            var secUL = this.querySelector("ul");
            secUL.style.display = "none";
        }
    }
}