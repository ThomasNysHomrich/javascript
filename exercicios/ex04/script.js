function calcular() {
    var numero = document.getElementById("txtnum")
    var tab = document.getElementById("seltab")
    var res = document.getElementById("res");

    if (numero.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (var cont = 1;cont < 11;cont++) {
            var item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            tab.appendChild(item)
        }
    }
}