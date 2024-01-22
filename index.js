let vitoriasInput = document.querySelector('#vitorias')
let derrotasInput = document.querySelector('#derrotas')
let resposta = document.querySelector('.resposta')

function resultado() {
    let vitoria = parseInt(vitoriasInput.value)
    let derrota = parseInt(derrotasInput.value)
    
    let vitoriasTotal = vitoria - derrota
    let ranque = ""
    if (vitoriasTotal <= 10) {
        ranque = "Ferro"
    }else if(vitoriasTotal <=20){
        ranque = 'Bronze'
    }else if(vitoriasTotal <= 50){
        ranque = 'Prata'
    }else if (vitoriasTotal <= 80) {
        ranque = 'Ouro'
    }else if (vitoriasTotal <= 90) {
        ranque = 'Diamante'
    }else if (vitoriasTotal <= 100) {
        ranque = 'Lendário'
    }else {
        ranque = 'Imortal'
    }

    resposta.innerHTML =`O Herói tem de saldo de ${vitoriasTotal} e está no nível ${ranque}`
}



