const { InvalidRegexError } = require('../errors/invalidRegexError.js')
const safeRegex = require('safe-regex')

const evaluateRegex = (regex) => {
  const isSafe = safeRegex(regex)
  if(isSafe) return regex

  throw new InvalidRegexError(regex)
}

module.exports = { evaluateRegex }