// JavaScript Document
function mOver(i) {
		let subMenuBox = document.querySelectorAll(".title span"); //获得title下的所有ul
		let showTxt = document.querySelector(".show_txt");
		let showTxt1 = document.querySelector(".show_txt1");
		let showTxt2 = document.querySelector(".show_txt2");
//		if(subMenuBox[i].style.opacity==0){
//			showTxt.style.opacity = 1;
//		}
		if(i==0){
			if(showTxt.style.opacity == 1){
				showTxt.style.opacity = 0;
			}
			else{
				showTxt.style.opacity = 1;
				showTxt1.style.opacity = 0;
				showTxt2.style.opacity = 0;
			}
			
		}
		if(i==1){
			if(showTxt1.style.opacity == 1){
				showTxt1.style.opacity = 0;
				showTxt.style.opacity == 1
			}
			else{
				showTxt1.style.opacity = 1;
				showTxt.style.opacity = 0;
				showTxt2.style.opacity = 0;
			}
			
		}
	if(i==2){
			if(showTxt2.style.opacity == 1){
				showTxt2.style.opacity = 0;
				showTxt.style.opacity == 1
				
			}
			else{
				showTxt2.style.opacity = 1;
				showTxt.style.opacity = 0;
				showTxt1.style.opacity = 0;
			}
			
		}
}
//function mOut(i) {
//		let subMenuBox = document.querySelectorAll(".title span"); //获得title下的所有ul
//		let showTxt = document.querySelector(".show_txt");
//		let showTxt1 = document.querySelector(".show_txt1");
//		let showTxt2 = document.querySelector(".show_txt2");
////		if(subMenuBox[i].style.opacity==1){
////			showTxt.style.opacity = 0;
////		}
//		if(i==0){
//			showTxt.style.opacity = 0;
//		}
//		if(i==1){
//			showTxt1.style.opacity = 0;
//		}
//		if(i==2){
//			showTxt2.style.opacity = 0;
//		}
//}