// JavaScript Document
let changedbanner = document.querySelectorAll(".allBanner div");
let changey = document.querySelectorAll(".allBanner span");

var i = 0;

let time1 = setInterval(show,2000);


function show(){
	if(i>5){
		i = 0;
		changedbanner[i].style.display = "block";
		changey[i].style.backgroundColor = "#9999cc";
		changey[i].style.width = "15px";
		changey[i].style.height = "15px";
		changey[i].style.borderRadius = "15px";
		changey[i].style.top = "312px";
		for(a of changedbanner){
			if(a == changedbanner[i]){
				a.style.display = "block";
//				document.querySelector(".y").style.backgroundColor = "#9999cc";
				for(let b of changey)
					{
						if(b==changey[i])
							{
							}
						else{
							b.style.backgroundColor = "#ffffff";
							b.style.width = "10px";
							b.style.height = "10px";
							b.style.borderRadius = "10px";
							b.style.top = "315px";
						}
					}
			}	
			else{
				a.style.display = "none";
			}
		}
	}
	else{
		changedbanner[i].style.display = "block";
		changey[i].style.backgroundColor = "#9999cc";
		changey[i].style.width = "15px";
		changey[i].style.height = "15px";
		changey[i].style.borderRadius = "15px";
		changey[i].style.top = "312px";
		for(let a of changedbanner){
			if(a == changedbanner[i]){
				
				a.style.display = "block";
			}	
			else{
				a.style.display = "none";
			}
		}
		for(let b of changey){
			if(b==changey[i]){
			}
			else{
				b.style.backgroundColor = "#ffffff";
				b.style.width = "10px";
				b.style.height = "10px";
				b.style.borderRadius = "10px";
				b.style.top = "315px";
			}
		}
	}
	i++;
};


for (let k = 0;k < changey.length;k++)
	{
		changey[k].addEventListener("click",()=>{
		window.clearInterval(time1);
		changedbanner[k].style.display = "block";
		changey[k].style.backgroundColor = "#9999cc";
		changey[k].style.width = "15px";
		changey[k].style.height = "15px";
		changey[k].style.borderRadius = "15px";
		changey[k].style.top = "312px";
		for(let a of changedbanner){
			if(a == changedbanner[k]){
				
				a.style.display = "block";
			}	
			else{
				a.style.display = "none";
			}
		}
		for(let b of changey){
			if(b==changey[k]){
			}
			else{
				b.style.backgroundColor = "#ffffff";
				b.style.width = "10px";
				b.style.height = "10px";
				b.style.borderRadius = "10px";
				b.style.top = "315px";
			}
		}
			i = k;
			time1 = setInterval(show,2000);
	});
};
					 

