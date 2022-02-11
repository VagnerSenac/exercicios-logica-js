//João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o 
//rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior 
//que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
//deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça 
//um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar 
//na variável excesso a quantidade de quilos além do limite e na variável multa o 
//valor da multa que João deverá pagar. Imprima os dados do programa 
//com as mensagens adequadas.

//Inicio
	let peso_pescado, peso_regulamento, peso_excesso, total_multa, multa
	console.log(" Informe os Kgs de peixe que você pescou:")
	//Leia(peso_pescado);
    peso_pescado = 60
	peso_regulamento = 50 
	multa = 4
	peso_excesso = peso_pescado - peso_regulamento
	total_multa = peso_excesso * multa
	console.log("O valor da multa é", total_multa)
//Fim