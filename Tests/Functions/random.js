import expect from 'expect.js'
// import assert from 'assert'
// import sinon from 'sinon'

import random from '../../Functions/random.js'

describe('#random', function () {
  it('should return a number between 0 and 100', function () {
    expect(random()).to.be.within(0, 100)
  })
})
