




// Exercício 1. Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.
// Os valores devem ser informados pelo usuario.

var numeros = [];

while(numeros.length < 20){
    let num = parseFloat(prompt("Digite um número:"));
    numeros.push(num);
}

alert("Os números digitados foram: " + numeros.toString());




// Exercício 2. Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.
     
alert("Exercicio 2");
let numMaiores50 = [];
    let numMenor50 = [];
    let contagem = 0;

    while(contagem < 12){
        let num = parseFloat(prompt("Digite um número: "));

        if(num > 50){
            numMaiores50.push(num);
        }else{
            numMenor50.push(num);
        }

        contagem++;
    }

    alert("Os números digitados maiores de 50 foram : \n" + numMaiores50.toString() + "\nOs números digitados menores de 50 foram: \n" + numMenor50.toString());

    





        // Exercicio 3:  Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros - esse inventário será um array.
// Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem. 
// Torper terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem. 

// No meio de sua jornada, Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 
// Descreva cada uma das ações acima. utilizando código (utilize comentários para ficar mais claro). 

// No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.
// Descreva cada uma das ações acima. utilizando código.

// Exiba o resultado final de cada um dos inventários utilizando "document.write".
        

alert("Vamos treinar arrays")


    let itensDrofo = ["Anel Invisibilidade", "Bota Mágica", "Bota Mágica", "Poção do Sono", "Poção Inocência", "Poção Inocência"];
    let itensTorper = ["Capa da Invisibilidade", "Pedra do Despertar", "Varinha das Varinhas", "Poção da Inocência", "Poção da Mentira", "Poção da Mentira", "Poção Anti-Inteligência"];

    /* AÇÕES DO TORPER */

    // Consumiu uma das poções da mentira
    itensTorper.splice(5,1);

    // Perdeu sua Pedra
    itensTorper.splice(1,1);

    // Ganhou um par de Botas Mágicas do Drofo
    itensDrofo.splice(2,1);
    itensTorper.push("Bota Mágica");

    // Achou um Escudo Mágico e uma Espada Mágica.
    itensTorper.splice(6, 0, "Escudo Mágico", "Espada Mágica");

    
    /* AÇÕES DO DROFO */

    // Ganhou mais uma bota mágica
    itensDrofo.push("Bota Mágica");

    // Usou sua Poção do Sono e consumiu a Poção Anti-Inteligência do Torper
    itensDrofo.splice(2,1);
    itensTorper.splice(4,1);
    
    // Encontrou um Ovo de Dragão e uma Coxinha
    itensDrofo.splice(5, 0, "Ovo de Dragão", "Coxinha");

    // Exiba o resultado final de cada um dos inventários utilizando "document.write".
    document.write("<strong>Itens do Drofo: </strong>" + itensDrofo.toString() + "<br><br>");
    document.write("<strong>Itens do Torper: </strong>" + itensTorper.toString() + "<br><br>");

