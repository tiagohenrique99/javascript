let num = [5,8,2,9,3]
num.push(1)
num.push(4)
num.push(6)
num.push(7)
//num.length - diz a quantidade de seletores chaves
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)

if(pos == -1){
    console.log('valor não indentificado')
}else{
    console.log(`O valor  esta na posição ${pos}`)
}