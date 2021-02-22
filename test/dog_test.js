var assert = require('chai').assert;
var Dog = require('../exercises/dog');

describe('Dog', function() {

  it('should be a function', function() {
    assert.isFunction(Dog);
  });

  it('should create a new dog', function(){
    var fido = new Dog();
    assert.instanceOf(fido, Dog);
  });
});
