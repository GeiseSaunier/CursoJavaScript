var num = [5,8,2,9,3]
num[3] = 6
num.push(7) // Acrescenta o valor no final do array
num.length // verifica tamenho do array/posicoes. // Obs: nao tem parentense no js
num.indexOf(7) // buscar valores no vetor
num.sort() // pega todos os elementos e coloca em ordem crescente
console.log(`Nosso vetor possui os valores ${num}`)
console.log(`O vetor possui ${num.length} posições.`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}