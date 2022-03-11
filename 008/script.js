//Início 
function salario(num1, num2){
	let  total
	num1 = parseFloat(num1)
    num2 = parseFloat(num2)
	total = num1 * num2
	document.querySelector("#resultado").innerHTML = "O seu salário nesse mês é de R$ " + total
//Fim
}
