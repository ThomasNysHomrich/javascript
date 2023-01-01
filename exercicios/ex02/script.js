function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-masculino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-masculino.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-feminino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-feminino.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}