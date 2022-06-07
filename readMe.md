# Text Processor

Hello! This is a text processor MVP!

# What this app does?

This application receives a pdf file and reads the document to extract important information.

The information is returned in a JSON format, with structured data.

# Example

The app reads the contract in the folder 'docs' and returns the data of each person like that: 

'
  People from contract [
  Person {
    nome: 'Xuxa da Silva',
    nacionalidade: 'Brasileira',
    estadoCivil: 'Casada',
    documento: '23574342012',
    rua: 'Rua dos bobos',
    numero: 'zero',
    bairro: 'Alphaville',
    estado: 'São Paulo'
  },
  Person {
    nome: 'Arya Robbin',
    nacionalidade: 'Belga',
    estadoCivil: 'Casado',
    documento: '88411220052',
    rua: 'Av. paulista',
    numero: '1400',
    bairro: 'Consolação',
    estado: 'São Paulo'
  },
  Person {
    nome: 'Júlia Menezes',
    nacionalidade: 'Brasileira',
    estadoCivil: 'Solteira',
    documento: '29794780081',
    rua: 'Av. dos Estados',
    numero: '99',
    bairro: 'Jardins',
    estado: 'São Paulo'
  }
]
'

# Running locally

You just need to clone this repo and run 'npm run start' to see the magic happens!