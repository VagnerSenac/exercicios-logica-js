//Faça um Programa que peça a temperatura em graus Celsius,
 //transforme e mostre em graus Fahrenheit.

//Inicio
function temp(cel){
	let  fah
	console.log("Digite a temperatura em Graus Celsius:")
	//Leia(cel);
    fah = (cel * 9/5) + 32
	console.log("Temperatura em graus Fahrenheit é:", fah)
//Fim
}
temp(90)