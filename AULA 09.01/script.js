let pontos = Number(prompt("Digite a sua pontuação: "));

if(pontos >= 0 && pontos <= 50){
    alert("Sem Bônus para você este ano.");
} else if(pontos >= 51 && pontos <= 75){
    alert("Parabéns!Você recebeu um bônus de 8%.");
} else if(pontos >= 76 && pontos <= 90){
    alert("Excelente desempenho! Você recebeu um bônus de 12%.");
} else if(pontos >= 91 && pontos <= 100){
    alert("Incrível! Você recebeu um bônus de 15%.");
} else {
    alert("Número digitado é inválido!")
};

// Criar a variável "pontos", valor = pedir número ao usuário;

// Se (pontos maior ou igual a 0 E pontos menor ou igual 50){
//     Escrever("Sem Bônus para você este ano");
// } senão se (pontos maior ou igual a 51 E pontos menor ou igual 75){
//     escrever("Parabéns!Você recebeu um bônus de 8%");
// } senão se (pontos maior ou igual a 76 E pontos menor ou igual 90){
//     escrever ("Excelente desempenho! Você recebeu um bônus de 12%.");
// } senão se (pontos maior ou igual a 91 E pontos menor ou igual 100){
//     escrever ("Incrível! Você recebeu um bônus de 15%.");
// } senão {
//     escrever ("Número digitado é inválido!");
// }


