import { Box, Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { vetor } from "./consumoArquivos"




function App() {

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

      <button onClick={vetor}>teste</button>
      
      <Box sx={{background: '#DCCCFF', width: '450px', height: '550px', maxHeight: '70%', maxWidth: '70%', borderRadius: '30px', boxShadow: 10}}>
        <Box sx={{margin: 3.5}}>
          <form >

          <Typography variant="h5" sx={{textAlign: 'center', marginBlock: 2}}>Algoritimos de ordenação</Typography>

          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2}}>
            <Select sx={{width: '40%'}} name="campo1" onChange={aoEscolher} value={algEscolhido.campo1}>
              {algoritimos.map((opcao) => (
                <MenuItem value={opcao.value}>{opcao.label}</MenuItem>
              ))}
            </Select>
            <Select sx={{width: '40%'}} name="campo2" onChange={aoEscolher} value={algEscolhido.campo2}>
              {algoritimos.map((opcao) => (
                <MenuItem value={opcao.value}>{opcao.label}</MenuItem>
              ))}
            </Select>
          </Box>
            <Typography variant="body1" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: 2}}>Quantidade de nós</Typography>
            <RadioGroup row sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <FormControlLabel value="1000" control={<Radio />} label="1000" />
                <FormControlLabel value="10000" control={<Radio />} label="10000" />
                <FormControlLabel value="100000" control={<Radio />} label="100000" />
                <FormControlLabel value="1000000" control={<Radio />} label="1000000" />
            </RadioGroup>
    
            <Typography variant="body1" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: 2}}>Disposição dos dados</Typography>
            <RadioGroup sx={{display: 'flex', alignItems: 'start', justifyContent: 'center', marginLeft: 1}}>
                <FormControlLabel value="ordenado-crescente" control={<Radio />} label="Ordenados - ordem crescente" />
                <FormControlLabel value="ordenado-decrescente" control={<Radio />} label="Ordenados - ordem decrescente" />
                <FormControlLabel value="ordenado-aleatória" control={<Radio />} label="Ordem Aleatória" />
            </RadioGroup>

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Button variant="contained" type="submit" sx={{background: '#8B80F9'}}>Executar</Button>
            </Box>

              </form>
        </Box>

      </Box>
    </Box>
  )
}

export default App
