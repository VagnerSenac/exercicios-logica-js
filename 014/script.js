//Faça um Programa que pergunte quanto você ganha por hora e o 
//número de horas trabalhadas no mês. Calcule e mostre o 
//total do seu salário no referido mês, sabendo-se que 
//são descontados 11% para o Imposto de Renda, 8% para o 
//INSS e 5% para o sindicato, faça um programa que nos dê:

//salário bruto.
//quanto pagou ao INSS.
//quanto pagou ao sindicato.
//o salário líquido.
//calcule os descontos e o salário líquido, conforme a tabela abaixo:

//+ Salário Bruto : R$
//- IR (11%) : R$
//- INSS (8%) : R$
//- Sindicato ( 5%) : R$
//= Salário Liquido : R$


//Inicio
//function caucularSalario(salario_hora,horas_mes,ir, inss,sindicato ){
function calcularSalario(){
	let  salarioBruto, sindicato,  inss, impostoRenda, salarioLiquido 
	salarioBruto = document.querySelector("#salario_bruto").value 
    salarioBruto = parseFloat(salarioBruto)
	inss = salarioBruto * 8 / 100 
	sindicato = salarioBruto * 5/100
	impostoRenda = salarioBruto * 11/100
	salarioLiquido = salarioBruto - inss - sindicato - impostoRenda
	document.querySelector("#resultado").innerHTML =  "<br>"
	document.querySelector("#resultado").innerHTML += "Salário Bruto: R$  " + salarioBruto
	document.querySelector("#resultado").innerHTML +=  "<br>"
	document.querySelector("#resultado").innerHTML += "INSS (8%): R$  " + inss
	document.querySelector("#resultado").innerHTML +=  "<br>"
	document.querySelector("#resultado").innerHTML += "Sindicato (5%): R$  " + sindicato
	document.querySelector("#resultado").innerHTML += "<br>"
	document.querySelector("#resultado").innerHTML += "Imposto de Renda (11%): R$  " + impostoRenda
	document.querySelector("#resultado").innerHTML += "<br>"
	document.querySelector("#resultado").innerHTML += "Salário Líquido: R$  " + salarioLiquido
}

