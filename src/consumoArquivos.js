import {  SelectionSort, ShellSort, BubbleSort, QuickSort, ConverterVetor } from "./valores"

// let resNumerosAleatorios = await fetch('numeros_aleatorios.txt')
// .then((data) => data.text())
// .then(x => x.split('\n'))
// .then(x => x.slice(1, 101))


let resNumerosDecrescentes = await fetch('numeros_ordem_decrescente.txt')
.then((data) => data.text())
.then((x) => x.split('\n'))
.then(x => x.slice(0, 10))

let listaDecConvert = []
listaDecConvert = ConverterVetor(resNumerosDecrescentes, listaDecConvert)


const valorDec = QuickSort(listaDecConvert) 
// let listaNumerosDecrescentes = [] 
// listaNumerosDecrescentes = ConverterVetor(listaNumerosDecrescentes, resNumerosAleatorios) 

// let resNumerosOrdenados = await fetch('numeros_ordenados.txt')
// .then((data) => data.text())
// .then((x) => x.split('\n'))

// let listaNumerosOrdenados = []
// listaNumerosOrdenados = ConverterVetor(listaNumerosOrdenados, resNumerosAleatorios) 

export const vetor = () => {
    return(
        console.log(valorDec)
    )
}