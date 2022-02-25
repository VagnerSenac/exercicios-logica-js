//Tendo como dados de entrada a altura de uma pessoa, 
//construa um algoritmo que calcule seu peso ideal, 
//usando a seguinte fórmula: (72.7*altura) - 58


//Inicio
function pesoIdeal(altura){
	let  peso
	console.log("Digite sua altura:")
	//Leia(altura);
    peso = (72.7 * altura) - 58
	console.log("Seu peso ideal é:", peso)
//Fim
}
pesoIdeal(1.74)