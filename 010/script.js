//Faça um Programa que peça a temperatura em graus Celsius,
 //transforme e mostre em graus Fahrenheit.

//Inicio
function grau(num1){
	let  fah
	num1 = parseFloat(num1)
	//Leia(cel);
    fah = (num1 * 9/5) + 32
	document.querySelector("#resultado").innerHTML = "Temperatura em graus Fahrenheit é:" + fah
//Fim
}
temp(90)