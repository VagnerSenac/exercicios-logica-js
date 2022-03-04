//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

//INICIO
function quadrado(lado){
	let  area
	lado = parseFloat(lado)
	//LEIA(lado)
	area = (lado * lado) * 2
	document.querySelector("#resultado").innerHTML = "O dobro da sua área é: " + area
//FIM
}
