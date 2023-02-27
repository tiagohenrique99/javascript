var idade = 69
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('ainda Não vota')
} else if(idade < 18 || idade > 65){
        console.log('seu voto é opcional')
}else {
    console.log('seu voto é obrigatorio')
}