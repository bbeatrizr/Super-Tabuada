function calcular(){
   var num = document.getElementById ('txtn1') 
   var tab = document.getElementById('celtab')
   //se o valor que a variavél 'pegar' for igual a 0 então..window..
   if (num.value.length == 0){
    window.alert("Por favor, digite os dados!")
   }else { //senão conversão de string para numero
    // a variavel passa a valer 'n' e também é o numero que o usuario vai digitar
    var n = Number(num.value)
    // '' <- para limpar a tela 
    tab.innerHTML = ''
    // o contador passa a valer 1
    // enquanto o contador for menor ou igual a 10 contador recebe mais 1 até 10
    for (var c = 1; c <= 10; c++){
        //
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        }
    }
}