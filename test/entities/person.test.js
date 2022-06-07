const { describe, it } = require('mocha')
const { expect } = require('chai')
const Person = require('../../src/entities/person')

describe('Person', () => {
  it('should generate a Person instance from properties list', () => {
    const content = [
        "Xuxa da Silva",
        "brasileira",
        "casada",
        "CPF 235.743.420-12",
        "residente e domiciliada a Rua dos bobos",
        "zero",
        "bairro Alphaville",
        "São Paulo." 
    ]

    const result = new Person(content)
    const expectedResult = {
      nome: "Xuxa da Silva",
      nacionalidade: "Brasileira",
      estadoCivil: "Casada",
      documento: "23574342012",
      rua: "Rua dos bobos",
      numero: "zero",
      bairro: "Alphaville",
      estado: "São Paulo"
    }
    expect(result).to.be.deep.equal(expectedResult)
  })
})