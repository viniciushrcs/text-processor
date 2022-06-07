const TextProcessor = require('./textProcessor')

class TextProcessorFacade {
  #textProcessor
  constructor(text) {
    this.#textProcessor = new TextProcessor(text)
  }

  getPeopleFromPDF() {
    return this.#textProcessor
      .extractPeopleData()
      .divideTextInColumns()
      .removeEmptyCharacters()
      .mapPerson()
      .build()
  }
}

module.exports = TextProcessorFacade