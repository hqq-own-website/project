// JavaScript Document
let lj = document.querySelectorAll(".footer_menu span");
let lj_txt = document.querySelectorAll(".lj_txt");
let footer_menu = document.querySelector(".footer_menu");

	for(let i=0;i<lj.length;i++){
		lj[i].addEventListener("click",()=>{
			if(lj_txt[i].style.height == "200px"){
				for(let c of lj){
						c.style.color = "#333333";
						c.style.backgroundColor = "#ffffff";
					}
					footer_menu.style.borderBottomStyle = "solid";
					footer_menu.style.borderBottomColor = "#cccccc";
					lj_txt[i].style.borderBottomColor = "solid";
					lj_txt[i].style.height = "0px";
					lj_txt[i].style.borderBottomStyle = "none";
//					lj_txt[i].style.display = "none";
			}
			else{
				lj[i].style.backgroundColor = "#F8F6F7";
				lj[i].style.color = "#6666cc";
				footer_menu.style.borderBottomStyle = "none";
				lj_txt[i].style.height = "200px";
				lj_txt[i].style.borderBottomStyle = "solid";
				lj_txt[i].style.borderBottomColor = "#cccccc";
//				lj_txt[i].style.display = "block";

				for(let a of lj_txt){
					if(a!=lj_txt[i]){
						a.style.height = "0px";
						a.style.borderBottomStyle = "none";
//						a.style.display = "none";
					}
				for(let b of lj){
					if(b!=lj[i]){
						b.style.color = "#333333";
						b.style.backgroundColor = "#ffffff";
					}
				}
					
				}
			}
		});
		
	}
//	d.addEventListener("click",()=>{
//		d.style.backgroundColor = "#ffffff";
//		d.style.color = "#333333";
//		footer_menu.style.borderBottomStyle = "solid";
//		footer_menu.style.borderBottomColor = "#cccccc"
//		lj_txt.style.display = "none";
//	});
//}


//for(let d of lj){
//			d.addEventListener("click",()=>{
//				if(lj_txt.style.display == "block"){
//					for(let c of lj){
//						c.style.color = "#333333";
//						c.style.backgroundColor = "#ffffff";
//					}
//					footer_menu.style.borderBottomStyle = "solid";
//					footer_menu.style.borderBottomColor = "#cccccc";
//					lj_txt.style.display = "none";
//				}
//				else{
//					d.style.backgroundColor = "#F8F6F7";
//					d.style.color = "#0066cc";
//					footer_menu.style.borderBottomStyle = "none";
//					lj_txt.style.display = "block";
//				}
//			});
//		
//	}
	

