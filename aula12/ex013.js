var agora = new Date
var diasem = agora.getDay()
/*
Dias da semana representados no JS
    0 = Domingo
    1 = Segunda-feira
    2 = Terça-feira
    3 = Quarta-feira
    4 = Quinta-feira
    5 = Sexta-feira
    6 = Sabado
*/

switch(diasem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2: 
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido')
}