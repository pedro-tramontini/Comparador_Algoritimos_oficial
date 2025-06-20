//Algoritimo SelectionSort
export const SelectionSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let i, j, temp, menor;
    let n = array.length;

    for (i = 0; i < n - 1; i++) {
        menor = i;
        for (j = i + 1; j < n; j++) {
            if (array[j] < array[menor]) {
                menor = j;
            }
        }
        temp = array[i];
        array[i] = array[menor];
        array[menor] = temp;
    }
    return(array)
}

//Algoritimo InsertionSort
export const InsertionSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let i, chave, j;
    let n = array.length;

    for (i = 1; i < n; i++) {
        chave = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > chave) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = chave;
    }
    
    return(array)

}

//Algoritimo BubbleSort
export const BubbleSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let i, j, temp;
    let n = array.length;


    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return(array)

}

//Algoritimo ShellSort
export const ShellSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let n = array.length;

        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j;
                for (j = i; j >= gap && array[j-gap] > temp; j -= gap)
                    array[j] = array[j-gap];
    
                array[j] = temp;
            }

            return(array)
        }}

//Algoritimo QuickSort
export const QuickSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let pivot = array[0]

    let left = []
    let right = []

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i])
    }

    return QuickSort(left).concat(pivot, QuickSort(right))
}

const milNumeros = (quantidade) => {
    let resNumerosAleatorios = fetch('numeros_aleatorios.txt')
        .then((data) => data.text())
        .then(async x => {
            x.split('\n')
        })

}

export const ConverterVetor = (lista, args) => {
    for (let i in lista) {
        let vetNumRandom = lista[i]
        let nums = vetNumRandom.split('\n')
        for (let j in nums) {
            let num = parseInt(nums[j])
            args.push(num)
        }
    }
    return [...args]
};

