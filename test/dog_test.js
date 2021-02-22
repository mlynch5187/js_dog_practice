var assert = require('chai').assert;
var Dog = require('../exercises/dog');

describe('Dog', function() {

  it('should be a function', function() {
    assert.isFunction(Dog);
  });
});
