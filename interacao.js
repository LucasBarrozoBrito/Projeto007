var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var resp = document.querySelector ('div#res')
var valores = []


function isNumero (n){
    if(Number(n) >= 1 && Number (n) <= 100){
        return true
    } else {
        return false
    }

}

function inLista (n, l){
    if(l.indexOf(Number(n)) != -1){
        return true

    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text  = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resp.innerHTML = ''
        
    }else {
        window.alert('Valor invalido ou já encontrado')


    }
    num.value = ''
    num.focus()


}

function finalizar(){
    if(valores.length == 0){
        window.alert ('Adicione valores antes de finalizar!')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores [0]
        var soma = 0
        var media = 0


        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos]> maior)
            maior = valores[pos]
            if (valores [pos] < menor)
            menor = valores[pos]

        }

        media = soma / total
        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo, temos ${total} números cadastrados. </p>`
        resp.innerHTML += `<p>O maior valor é ${maior} </p>`
        resp.innerHTML += `<p>O menor valor é ${menor} </p>`
        resp.innerHTML += `<p>A soma dos valores é ${soma} </p>`
        resp.innerHTML += `<p>A média dos valores é ${media} </p>`
    }
}