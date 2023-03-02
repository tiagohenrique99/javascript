function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','homem-bebe.png')
            }else if (idade >= 10 && idade < 21) {
                //adolecente
                img.setAttribute('src','homem-adolecente.png')
            }else if (idade < 45) {
                //adulto
                img.setAttribute('src','homem-adulto.png')
            }else {
                //idoso
                img.setAttribute('src','homem-idoso.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','mulher-bebe.png')
            }else if (idade >= 10 && idade < 21) {
                //adolecente
                img.setAttribute('src','mulher-adolecente.png')
            }else if (idade < 45) {
                //adulto
                img.setAttribute('src','mulher-adulta.png')
            }else {
                //idoso
                img.setAttribute('src','mulher-idosa.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}