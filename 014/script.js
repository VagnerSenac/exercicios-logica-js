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
	let salario_hora, salario_bruto, valor_sindicato, sindicato,  valor_inss, inss,	valor_ir, ir, salario_liquido, horas_mes
	console.log("informe o seu salário por hora")
	//Leia(salario_hora);
    salario_hora = 29
	console.log("Informe o número de horas trabalhadas no mês")
	//Leia(horas_mes);
    horas_mes = 120
	ir = 11
	inss = 8
	sindicato = 5
	salario_bruto = salario_hora * horas_mes
	valor_ir = ir / 100 * salario_bruto
	valor_inss = inss / 100 * salario_bruto
	valor_sindicato = sindicato / 100 * salario_bruto
	salario_liquido = salario_bruto - valor_ir - valor_inss - valor_sindicato

	console.log(" + Salário Bruto : R$", salario_bruto)
	console.log(" - IR (11%) : R$", valor_ir)
	console.log(" - INSS (8%) : R$", valor_inss)
	console.log(" - Sindicato (5%) : R$", valor_sindicato)
	console.log(" = Salário Liquido : R$", salario_liquido)
//Fim 