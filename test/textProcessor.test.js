const { describe, it } = require('mocha')
const { expect } = require('chai')

const TextProcessor = require('../src/textProcessor')
const mock = require('./mock/validPeopleData')

describe('TextProcessor', () => {
  it('should return people data when extractPeopleData is called', () => {
    const result = new TextProcessor(mock)
      .extractPeopleData()  
      .build()

    const expectedResult = [
      [
        "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
        "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. "
      ].join("\n"),
      [
        "Arya Robbin, belga, casado, CPF 884.112.200-52, residente e ",
        "domiciliada a Av. paulista, 1400, bairro Consolação, São Paulo. "
      ].join("\n"),
      [
        "Júlia Menezes, brasileira, solteira, CPF 297.947.800-81, residente e ",
        "domiciliada a Av. dos Estados, 99, bairro Jardins, São Paulo. "
      ].join("\n"),
    ]

    expect(result).to.be.deep.equal(expectedResult)
  })

  it('should divide text in columns when divideTextInColumns is called', () => {
    const content = [
      [
        "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
        "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. "
      ].join("\n")
    ]

    const result = new TextProcessor(content)
      .divideTextInColumns()  
      .build()

      const expectedResult = [
        [
          "Xuxa da Silva",
          " brasileira",
          " casada",
          " CPF 235.743.420-12",
          " residente e \ndomiciliada a Rua dos bobos",
          " zero",
          " bairro Alphaville",
          " São Paulo. "
        ]
      ]
      
    expect(result).to.be.deep.equal(expectedResult)
  })
})