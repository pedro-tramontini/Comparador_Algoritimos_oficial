//Algoritimo SelectionSort
export const selectionSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let i, j, temp, menor;
    let n = array.length;
    let quantRepet = 0;

    for (i = 0; i < n - 1; i++) {
        menor = i;
        quantRepet += 1;
        for (j = i + 1; j < n; j++) {
            if (array[j] < array[menor]) {
                menor = j;
            }
            quantRepet += 1;
        }
        temp = array[i];
        array[i] = array[menor];
        array[menor] = temp;
    }
    return(quantRepet)
}


//Algoritimo InsertionSort
export const insertionSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let i, chave, j;
    let n = array.length;
    let quantRepet = 0;


    for (i = 1; i < n; i++) {
        chave = array[i];
        j = i - 1;
        quantRepet += 1;

        while (j >= 0 && array[j] > chave) {
            array[j + 1] = array[j];
            j = j - 1;
            quantRepet += 1;
        }

        array[j + 1] = chave;
    }
    
    return(quantRepet)

}



//Algoritimo BubbleSort
export const bubbleSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let i, j, temp;
    let n = array.length;
    let quantRepet = 0;

    for (i = 0; i < n - 1; i++) {
        quantRepet += 1;
        for (j = 0; j < n - 1 - i; j++) {
            quantRepet += 1;
            if (array[j] > array[j + 1]) {
                quantRepet += 1;
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return(quantRepet)
}



//Algoritimo ShellSort
export const shellSort = (arr) => {
  let quantRepet = 0;

  for (
    let interval = Math.floor(arr.length / 2);
    interval > 0;
    interval = Math.floor(interval / 2)
  ) {
    for (let i = interval; i < arr.length; i++) {
        quantRepet += 1;
      let current = arr[i];
      let j = i;
      while (j >= interval && arr[j - interval] > current) {
        quantRepet += 1;
        arr[j] = arr[j - interval];
        j -= interval;
      }
      arr[j] = current;
    }
  }
  return (quantRepet);
};



//Algoritimo QuickSort
export const quickSort = (array) => {
    let quantRepet = 0;

    if (array.length <= 1) {
        return array
    }

    let pivot = array[0]

    let left = []
    let right = []

    for (let i = 1; i < array.length; i++) {
        quantRepet += 1;
        array[i] < pivot ? left.push(array[i]) : right.push(array[i])
    }

    return quantRepet
}



export const converterVetor = (lista, args) => {
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

