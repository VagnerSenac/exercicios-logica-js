//Faça um Programa que converta metros para centímetros.

//INICIO
function metros(metro){
	let cent
	metro = parseFloat(metro)
	//LEIA(metro);
    cent = metro * 100
	document.querySelector("#resultado").innerHTML = "Seu valor mede " + cent + " centimetros!!"
//FIM
}
