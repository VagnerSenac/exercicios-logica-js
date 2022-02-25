//Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo
 //que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7
//No exercício você deve mostrar os dois resultados, tanto para 
//homem quanto para mulher.

//Inicio
function pesoIdeal(altura,sexo){ 
    console.log("Digite a altura da pessoa:")
	//leia(altura);
    console.log("Qual é o sexo da pessoa: (h) Homens / (m) Mulher")
	//Leia(sexo);
    if (sexo = "m"){
	//Inicio Se
	   peso = (62.1 * altura) - 44.7
       } else {
	//Fim se
	//Senão
	//Inicio senão
	  peso = (72.7 * altura) - 58
       }
	//Fim Senão
	console.log("O peso ideal é: ", peso)
//Fim  
}
pesoIdeal(1.74, "m")  	