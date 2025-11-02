function verificarPrimo(){
            let numero = parseFloat(document.getElementById("numeroInput").value);
            let ehPrimo = true;
            
            if (isNaN(numero)) {
                document.getElementById("resposta").textContent = "Por favor, digite um número válido.";
                return;
            }
            
            if (numero <= 1){
                ehPrimo = false;
            } else {
                for (let i = 2; i <= Math.sqrt(numero); i++){
                    if (numero % i === 0){
                        ehPrimo = false;
                        break;
                    }
                }
            }
            
            if (ehPrimo){
                document.getElementById("resposta").textContent = numero + " é um número primo.";
            } else {
                document.getElementById("resposta").textContent = numero + " não é um número primo.";
            }
        }
