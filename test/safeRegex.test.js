const { describe, it } = require('mocha')
const { expect } = require('chai')

const { InvalidRegexError } = require('../errors/invalidRegexError')
const { evaluateRegex } = require('../util/safeRegex')

describe('safeRegex', () => {
  it('should throw an error when evaluateRegex returns error', () => {
    const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/

    expect(() => evaluateRegex(unsafeRegex)).to.throw(InvalidRegexError, `The regex: ${unsafeRegex} is not safe!`)
  })
})