import {  selectionSort, shellSort, bubbleSort, quickSort, converterVetor } from "./valores"

let resNumerosAleatorios = await fetch('numeros_aleatorios.txt')
.then((data) => data.text())
.then(x => x.split('\n'))
.then(x => x.slice(0, 10))

let listaAleatConvert = []
listaAleatConvert = converterVetor(resNumerosAleatorios, listaAleatConvert)



let resNumerosDecrescentes = await fetch('numeros_ordem_decrescente.txt')
.then((data) => data.text())
.then((x) => x.split('\n'))
.then(x => x.slice(0, 10))

let listaDecConvert = []
listaDecConvert = converterVetor(resNumerosDecrescentes, listaDecConvert)



let resNumerosOrdenados = await fetch('numeros_ordenados.txt')
.then((data) => data.text())
.then((x) => x.split('\n'))
.then(x => x.slice(0, 10))

let listaOrdenConver = []
listaOrdenConver = converterVetor(resNumerosOrdenados, listaOrdenConver) 


export const vetor = (evento) => {
    evento.preventDefault()
    return(
        console.log('CHAMANDO FUNÇÃO VETOR')
    )
}