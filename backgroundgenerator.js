var css=document.querySelector('h3');
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var body=document.getElementById('Gradient');


function SetGradient()
{
	body.style.background="linear-gradient(to right,"+color1.value+", "+color2.value+")";
	css.textContent=body.style.background+";";
	console.log(color1.value);
	console.log(color2.value);

}
color1.addEventListener("input",SetGradient); 
color2.addEventListener("input",SetGradient);
