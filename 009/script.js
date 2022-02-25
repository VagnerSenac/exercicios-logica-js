//Faça um Programa que peça a temperatura em graus Fahrenheit, 
//transforme e mostre a temperatura em graus Celsius.
//C = 5 * ((F-32) / 9).

//Inicio
function temperatura(fah){
	let  cel
	console.log("Digite a temperatura em Graus Fahrenheit:")
	//Leia(fah);
  	cel = 5 * ((fah-32) / 9);
	console.log("Temperatura em graus Celsius é:", cel)
//Fim
}
temperatura(25)