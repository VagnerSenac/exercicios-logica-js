#include <stdio.h>
int main(void) {
	float altura, peso, imc;
  int sexo, repetir = 5;

while( repetir == 5){
	printf("Digite seu peso:");
 	scanf("%f",&peso);
   printf("Digite sua altura:");
 	scanf("%f",&altura);
 imc = peso / (altura*altura);
   printf("Sua massa corporal é de %.2f: \n", imc);
   printf("╔════════════════════════════════════════════════╗\n");

if ( imc < 17){
  printf("\e[31m");
}
printf("║   16 a 16,9 kg/m² - Muito abaixo do peso...    ║\n");
printf("\e[0m");

if ( imc >= 17  &&  imc <= 18.4){
  printf("\e[31m");
}
printf("║   17 a 18,4 kg/m² - Abaixo do peso...          ║\n");
printf("\e[0m");
if ( imc > 18.5 &&  imc <= 24.9){
  printf("\e[31m");
}
printf("║   18,5 a 24,9 kg/m² - Peso normal...           ║\n");
printf("\e[0m");
if ( imc > 25 &&  imc <= 29.9){
     printf("\e[31m");
}
printf("║   25 a 29,9 kg/m² - Acima do peso...           ║\n");
printf("\e[0m");
if ( imc > 30 &&  imc <= 34.9){
     printf("\e[31m");
}
printf("║   30 a 34,9 kg/m² - Obesidade grau I..         ║\n");
printf("\e[0m");
if ( imc > 35 &&  imc <= 40){
     printf("\e[31m");
}
printf("║   35 a 40 kg/m² - Obesidade grau II...         ║\n");
printf("\e[0m");
if ( imc > 40 ){
     printf("\e[31m");
}
printf("║   maior que 40 kg/m² - Obesidade grau III...   ║\n");
printf("\e[0m");
printf("╚════════════════════════════════════════════════╝\n");
printf("Deseja fazer um novo calculo? [5] SIM [6] NÃO\n");
	scanf("%d",&repetir);
}
  return 0;
}