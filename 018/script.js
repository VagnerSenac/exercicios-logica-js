//Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a 
//média alcançada por aluno e apresentar:A mensagem "Aprovado", se a média alcançada 
// for maior ou igual a 5 ou  a mensagem "Reprovado", se a média for menor do que 5;

function media(num1, num2){
    let  media
    console.log("Digite a primeira nota:")
    console.log("Digite a segunda nota:")
    media = (num1 + num2) / 2
    if(media > 5 ) {
         console.log("Aluno aprovado")
    }
    else{
         console.log("Aluno reprovado")
    }
}
media(8,1)




