let entrada = prompt("Digite uma frase para inverter:"); // solicita entrada do usuário
let saida = ""; // string de saída

// percorre a string de entrada do último ao primeiro caractere
for (let i = entrada.length - 1; i >= 0; i--) {
  saida += entrada[i]; 
}

console.log("A frase invertida é: " + saida); // imprime a string de saída invertida