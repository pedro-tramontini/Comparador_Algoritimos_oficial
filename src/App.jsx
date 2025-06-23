import { Box, Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { converterVetor } from "./valores"
import { selectionSort, shellSort, bubbleSort, quickSort, insertionSort } from "./valores"




function App() {

  const validacaoRequisicao = async (quantidadeNos, disposicaoDados) => {

    let resNumerosAleatorios = await fetch(`${disposicaoDados}.txt`)
    .then((data) => data.text())
    .then(x => x.split('\n'))
    .then(x => x.slice(0, `${parseInt(quantidadeNos)}`))
    
    let listaConvert = []
    listaConvert = converterVetor(resNumerosAleatorios, listaConvert)

    return [...listaConvert]
  } 

  const algOrden = (campo, array) => {
    console.log(campo)
    if (campo == "Selection Sort")
      return (selectionSort(array))

    if (campo == "Insertion Sort")
      return (insertionSort(array))

    if (campo == "Bubble Sort")
      return (bubbleSort(array))

    if (campo == "Shell Sort")
      return (shellSort(array))

    if (campo == "Quick Sort")
      return (quickSort(array))
  }

  //ESTADOS DOS VALORES DO FORMULARIO
  const [values, setValues] = useState({
    algEscolhido1: "",
    algEscolhido2: "",
    tempoExecucao1: "",
    tempoExecucao2: ""
  })

  const [tempoExec1, setTempoExec1] = useState(10)
  const [tempoExec2, setTempoExec2] = useState(10)

  const handleChange = (async (event) => {
    event.preventDefault()

    const data = new FormData (event.currentTarget)

    setValues({
      algEscolhido1: data.get('campo1'),
      algEscolhido2: data.get('campo2')
    })


    const arrayNumeros = await validacaoRequisicao(data.get('quantidade-nos'), data.get('algoritimo-ordenacao'))

    let inicio1 = performance.now()
    console.log(algOrden(data.get('campo1'), arrayNumeros))
    let fim1 = performance.now()
    let duracao1 = (fim1 - inicio1)
    setTempoExec1(duracao1)

    console.log("TEMPO DURACAO 2: " + duracao1)
    
    let inicio2 = performance.now()
    console.log(algOrden(data.get('campo2'), arrayNumeros))
    let fim2 = performance.now()
    let duracao2 = (fim2 - inicio2)
    setTempoExec2(duracao2)
    console.log("TEMPO DURACAO 2: " + duracao2)
  })





  const algoritimos = [
    {
      value: 'Selection Sort',
      label: 'Selection Sort',
    },
    {
      value: 'Insertion Sort',
      label: 'Insertion Sort',
    },
    {
      value: 'Bubble Sort',
      label: 'Bubble Sort',
    },
    {
      value: 'Shell Sort',
      label: 'Shell Sort',
    },
    {
      value: 'Quick Sort',
      label: 'Quick Sort',
    }
  ]

  const [algEscolhido, setAlgEscolhido] = useState(
    {
      campo1: 'Selection Sort',
      campo2: 'Selection Sort'
    }
  )
    
  const aoEscolher = (evento) => {
    const { name, value } = evento.target
    setAlgEscolhido({
      ...algEscolhido,
      [name]: value
    })
  }


  return (
    <Box sx={{background: '#F6F2FF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      
      <Box sx={{background: '#DCCCFF', width: '450px', height: '100%', maxHeight: '70%', maxWidth: '70%', borderRadius: '30px', boxShadow: 10}}>
        <Box sx={{margin: 3.5}}>

          <form onSubmit={handleChange}>
          <Typography variant="h5" sx={{textAlign: 'center', marginBlock: 2}}>Algoritimos de ordenação</Typography>

          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2}}>
            <Select sx={{width: '50%'}} name="campo1" onChange={aoEscolher} value={algEscolhido.campo1}>
              {algoritimos.map((opcao) => (
                <MenuItem value={opcao.value}>{opcao.label}</MenuItem>
              ))}
            </Select>
            <Select sx={{width: '50%'}} name="campo2" onChange={aoEscolher} value={algEscolhido.campo2}>
              {algoritimos.map((opcao) => (
                <MenuItem value={opcao.value}>{opcao.label}</MenuItem>
              ))}
            </Select>
          </Box>
            <Typography variant="body1" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: 2}}>Quantidade de nós</Typography>
            <RadioGroup row name="quantidade-nos" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <FormControlLabel value="1000" control={<Radio />} label="1000" />
                <FormControlLabel value="10000" control={<Radio />} label="10000" />
                <FormControlLabel value="100000" control={<Radio />} label="100000" />
                <FormControlLabel value="1000000" control={<Radio />} label="1000000" />
            </RadioGroup>
    
            <Typography variant="body1" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: 2}}>Disposição dos dados</Typography>
            <RadioGroup name="algoritimo-ordenacao" sx={{display: 'flex', alignItems: 'start', justifyContent: 'center', marginLeft: 1}}>
                <FormControlLabel value="numeros_ordenados" control={<Radio/>} label="Ordenados - ordem crescente" />
                <FormControlLabel value="numeros_ordem_decrescente" control={<Radio />} label="Ordenados - ordem decrescente" />
                <FormControlLabel value="numeros_aleatorios" control={<Radio />} label="Ordem Aleatória" />
            </RadioGroup>

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Button variant="contained" type="submit" sx={{background: '#8B80F9'}}>Executar</Button>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', maxHeight: '90%', marginBlock: 2}}>
              <Box sx={{width: '100%', height: '200px', background: '#a79ffa',  borderRadius: 4}}>
                <Typography variant="body1" sx={{fontWeight: 'bold'}} margin={1}>--{values.algEscolhido1}--</Typography>
                <Typography variant="body2" sx={{fontWeight: 'bold'}} margin={1}>TEMPO DE EXECUÇÃO: {tempoExec1}</Typography>

                <Typography variant="body1" sx={{fontWeight: 'bold'}} margin={1}>--{values.algEscolhido2}--</Typography>
                <Typography variant="body2" sx={{fontWeight: 'bold'}} margin={1}>TEMPO DE EXECUÇÃO: {tempoExec2}</Typography>
              </Box>
            </Box>

              </form>
        </Box>

      </Box>
    </Box>
  )
}

export default App
