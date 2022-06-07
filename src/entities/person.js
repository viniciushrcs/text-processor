const { evaluateRegex } = require('../../util/safeRegex')

class Person {
  constructor([
    nome,
    nacionalidade,
    estadoCivil,
    documento,
    rua,
    numero,
    bairro,
    estado,
  ]) {

    const firstLetterRegex = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
    const formatWordWithFirstLetterUpperCase = (prop) => {
      return prop.replace(firstLetterRegex, (fullMatch, group1, group2, index) => {
        return `${group1.toUpperCase()}${group2.toLowerCase()}`
      })
    }
    const formatCPFJustNumbers = (cpf) => cpf.replace(evaluateRegex(/\D/g), "")
    const formatRua = (rua) => rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
    const formatBairro = (bairro) => bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
    const formatEstado = (estado) => estado.replace(evaluateRegex(/\.$/), "")

    this.nome = nome;
    this.nacionalidade = formatWordWithFirstLetterUpperCase(nacionalidade);
    this.estadoCivil = formatWordWithFirstLetterUpperCase(estadoCivil);
    this.documento = formatCPFJustNumbers(documento);
    this.rua = formatRua(rua);
    this.numero = numero;
    this.bairro = formatBairro(bairro);
    this.estado = formatEstado(estado);
  }
}

module.exports = Person;

{
}
