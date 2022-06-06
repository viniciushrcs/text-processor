class InvalidRegexError extends Error {
  constructor(regex) {
    super(`The regex: ${regex} is not safe!`)
    this.name = "InvalidRegexError"
  }
}

module.exports = { InvalidRegexError }