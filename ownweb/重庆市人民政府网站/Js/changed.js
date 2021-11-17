// JavaScript Document
let bannerAndFont = document.querySelector("#bannerAndFont");
let Fmenusy = document.querySelector(".F-menu-sy");
let change = document.querySelectorAll(".change>div");
let Fmenu = document.querySelectorAll(".F-menu");

document.querySelector(".F-menu-sy").addEventListener("click",(e)=>{
	
	bannerAndFont.style.display="block";
	Fmenusy.querySelector("a").style.color="#ffffff";
	Fmenusy.style.backgroundColor = "#336699";
	Fmenusy.querySelector("a").querySelector("span").className = "home1";
	for(let a of change){
		if(a!=bannerAndFont)
		a.style.display = "none";
	}
	for(let h of Fmenu){
		h.style.backgroundColor = "#E9E7E8";
		h.querySelector("a").style.color = "#336699";
	}
});


for(let c = 0;c<Fmenu.length;c++){
	Fmenu[c].addEventListener("click",()=>{
		if(Fmenu[c].index==change[c+1].index)
			{
				change[c+1].style.display="block";
				Fmenu[c].style.backgroundColor = "#336699";
				Fmenu[c].querySelector("a").style.color = "#ffffff";
				Fmenusy.querySelector("a").style.color="#336699";
				Fmenusy.style.backgroundColor = "#E9E7E8";
				Fmenusy.querySelector("a").querySelector("span").className = "home";
				for(let f of Fmenu){
					if(f!=Fmenu[c]){
						f.style.backgroundColor = "#E9E7E8";
						f.querySelector("a").style.color = "#336699";
					}
				
				}
				for(let d of change){
				if(d!=change[c+1]){
					d.style.display = "none";
					}
				}
			}
	})
}




































