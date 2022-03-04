//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

//INICIO
function raio(raio) {
	let area
	raio = parseFloat(raio)
	//LEIA(raio);
    area = 3,14 * (raio*raio)
	document.querySelector("#resultado").innerHTML = "Sua área é de " + area + " Cm"
//FIM
}
