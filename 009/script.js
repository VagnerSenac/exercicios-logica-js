//Faça um Programa que peça a temperatura em graus Fahrenheit, 
//transforme e mostre a temperatura em graus Celsius.
//C = 5 * ((F-32) / 9).

//Inicio
function grau(num1){
	let  cel
	num1 = parseFloat(num1)
  	cel = 5 * ((num1-32) / 9);
	document.querySelector("#resultado").innerHTML = "Temperatura em graus Celsius é:  " + cel
//Fim
}
