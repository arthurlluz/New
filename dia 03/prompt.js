 let nomeDoUsuario = prompt('Insira seu nome');
 console.log(nomeDoUsuario)

let idadeDoUsuario = prompt('Insira sua Idade');
let idadeDoUsuarioEmInt = parseInt(idadeDoUsuario)
console.log(idadeDoUsuarioEmInt)

let alturaDoUsuario = prompt('Insira sua Altura');
let alturaDoUsuarioNumber = Number(alturaDoUsuario)
console.log(alturaDoUsuarioNumber)

let pesoDoUsuario = prompt('Insira seu Peso');
let pesoDoUsuarioNumber = Number(pesoDoUsuario)
console.log(pesoDoUsuarioNumber)

let idadeDoUsuario2 = parseInt(prompt('Insira sua Idade'));
console.log(idadeDoUsuario2 - 2023)

IMC = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario)
console.log(IMC)

console.log(" Olá, " + nomeDoUsuario + ", Você Tem " + idadeDoUsuario + ", Nasceu em " + idadeDoUsuario2 + ", Tem " + alturaDoUsuario + ", Pesa " + pesoDoUsuario + ", seu IMC é " + IMC + " Kg/M2 ")