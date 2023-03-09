// Sequência de Fionacci

function percente_a_sequencia(numero) {
    let a = 0;
    let b = 1;
    
    while (b < numero) {
        let contador = b;
        b = a + b;
        a = contador; 
    }
    if (b === numero) {
        return true;
    } else {
        return false;
    }
}

// Número de atribuição

let numero = 22; 

// Verificador

let verificador = percente_a_sequencia(numero); 
if (verificador) {
  console.log("O número escolhido foi " + numero + ", e ele pertence à sequência de Fibonacci.");
} else {
  console.log("O número escolhido foi " + numero + ", e ele não pertence à sequência de Fibonacci.");
}


