function notas(nota1, nota2, nota3, nota4){
	let  media
	nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
	nota3 = parseFloat(nota3)
	nota4 = parseFloat(nota4)
    media = (nota1 + nota2 + nota3 + nota4) / 4
	document.querySelector("#resultado").innerHTML = "Sua média será de " + media
}
//FIM
