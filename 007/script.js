//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

//INICIO
function quadrado(lado){
	let  area
	console.log("Digite a media de uma lado do quadrado:")
	//LEIA(lado)
	area = (lado * lado) * 2
	console.log("O dobro da sua área é:", area)
//FIM
}
quadrado(8)