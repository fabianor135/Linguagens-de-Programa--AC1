/*1. Escreva um programa que declare duas variáveis numéricas e realize as quatro
operações matemáticas básicas (+, -, *, /). Imprima os resultados no console.*/
console.log("1)");
console.log();
const num1 = 10;
const num2 = 5;


const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;


console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);
console.log("-------------------");

//2. Faça um programa que mostre os números impares em um intervalo de 0 a 100.

console.log("2)");
console.log();

function Impar(numero) {
  return numero % 2 !== 0;
}


for (let i = 0; i <= 100; i++) {

  if (Impar(i)) {

    process.stdout.write(i + " ");
  }
}
console.log();
console.log("-------------------");

//3. Faça um programa que mostre a quantidade de caracteres para o texto “Disciplina de Programação para web”.

console.log("3)");
console.log();

const texto = "Disciplina de Programação para web";


function contarCaracteres(texto) {
  let numeroCaracteres = 0;
  for (const caracter of texto) {
    numeroCaracteres++;
  }
  return numeroCaracteres;
}
console.log();


const numeroCaracteres = contarCaracteres(texto);
console.log(`O texto '${texto}' possui ${numeroCaracteres} caracteres.`);
console.log("-------------------");


/*4. Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
Por exemplo:
A variável nome possui o conteúdo “Edson Martin Feitosa”.
Deve mostrar edson.feitosa@facens.br*/

console.log("4)");
console.log();

function gerarEmail(nomeCompleto) {

  const partesNome = nomeCompleto.split(" ");


  const primeiroNome = partesNome[0].toLowerCase();
  const ultimoSobrenome = partesNome[partesNome.length - 1].toLowerCase();


  const email = `${primeiroNome}.${ultimoSobrenome}@facens.br`;

  return email;
}
console.log();

const nome = "Edson Martin Feitosa";
const email = gerarEmail(nome);

console.log(`Email gerado: ${email}`);
console.log("-------------------");


/*5. Escreva um programa que imprima os números de 1 a 10 no console usando um loop.Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. 
Observação: após o número 10 não pode ter um traço.*/

console.log("5)");
console.log();

for (let numero = 1; numero <= 10; numero++) {
  if (numero === 10) {
    console.log(numero);
  } else {
    process.stdout.write(numero + " ");
  }
}
console.log("-------------------");

/*6. Faça uma função que mostre o dobro do número passado. Caso o número seja menor ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”.*/

console.log("6)");
console.log();

function dobro(numero) {
  if (numero <= 0) {
    return "Só é aceito números positivos maiores que zero";
  } else {
    return numero * 2;
  }
}


const numero1 = 5;
const dobroNumero1 = dobro(numero1);
console.log(`O dobro de ${numero1} é ${dobroNumero1}`);

const numero2 = 0;
const dobroNumero2 = dobro(numero2);
console.log(`O dobro de ${numero2} é ${dobroNumero2}`);

const numero3 = -10;
const dobroNumero3 = dobro(numero3);
console.log(`O dobro de ${numero3} é ${dobroNumero3}`);
console.log("-------------------");

/*7. Escreva uma função que receba uma string como argumento e retorne a string invertida.*/

console.log("7)");
console.log();

function inverterOrdemPalavras(texto) {

  const palavras = texto.split(" ");


  palavras.reverse();


  return palavras.join(" ");
}


const texto1 = "Fabiano quer vivenciar Programação!";
const textoInvertido1 = inverterOrdemPalavras(texto1);
console.log(`Texto original: ${texto1}`);
console.log(`Texto com ordem das palavras invertida: ${textoInvertido1}`);

const texto2 = "Programação para web no Instituto Facens";
const textoInvertido2 = inverterOrdemPalavras(texto2);
console.log(`Texto original: ${texto2}`);
console.log(`Texto com ordem das palavras invertida: ${textoInvertido2}`);
console.log("-------------------");

/*8. Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).*/


console.log("8)");
console.log();

function contarVogais(texto) {
  let numeroVogais = 0;
  const vogais = "aeiou";

  for (const caracter of texto) {
    if (vogais.includes(caracter)) {
      numeroVogais++;
    }
  }

  return numeroVogais;
}


const tex1 = "Olá, mundo!";
const numeroVogais1 = contarVogais(texto1);
console.log(`O texto '${texto1}' possui ${numeroVogais1} vogais.`);

const tex2 = "Programação para web";
const numeroVogais2 = contarVogais(texto2);
console.log(`O texto '${texto2}' possui ${numeroVogais2} vogais.`);
console.log("-------------------");


/*9. Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um
único símbolo '@' e pelo menos um ponto '.' após o '@'.*/

console.log("9)");
console.log();

function validarEmailSimples(email) {
  return email.includes("@") && email.includes(".");
}


const email1 = "235678@facens.br";
const emailValido1 = validarEmailSimples(email1);
console.log(`O email '${email1}' é válido? ${emailValido1}`);

const email2 = "5478facens.br";
const emailValido2 = validarEmailSimples(email2);
console.log(`O email '${email2}' é válido? ${emailValido2}`);

const email3 = "587452@facens.br";
const emailValido3 = validarEmailSimples(email3);
console.log(`O email '${email3}' é válido? ${emailValido3}`);
console.log("-------------------");


/*10. Escreva uma função que verifique se uma determinada string é um palíndromo (ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita
para a esquerda).

Exemplo: arara*/

console.log("10)");
console.log();

function Palindromo(texto) {
  
  texto = texto.toLowerCase();

  
  const textoInvertido = texto.split("").reverse().join("");

  
  return texto === textoInvertido;
}


const palavra = "arara";

if (Palindromo(palavra)) {
  console.log(`${palavra} é um palíndromo!`);
} else {
  console.log(`${palavra} não é um palíndromo.`);
}

const palavra1 = "Fabiano";

if (Palindromo(palavra1)) {
  console.log(`${palavra1} é palíndromo!`);
} else {
  console.log(`${palavra1} não é um palíndromo.`);
}

const palavra2 = "socorrammesubinoonibusemmarrocos";

if (Palindromo(palavra2)) {
  console.log(`${palavra2} é palíndromo!`);
} else {
  console.log(`${palavra2} não é um palíndromo.`);
}
