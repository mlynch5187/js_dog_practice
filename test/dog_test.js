var assert = require('chai').assert;
var Dog = require('../exercises/dog');

describe('Dog', function() {

  it('should be a function', function() {
    assert.isFunction(Dog);
  });

  it('should create a new dog', function() {
    var fido = new Dog();

    assert.instanceOf(fido, Dog);
  });

  it('should have a name', function() {
    var fido = new Dog('Fido');

    assert.equal(fido.name, 'Fido');
  });

  it('should be able to have another name', function() {
    var max = new Dog('Max');

    assert.equal(max.name, 'Max');
  });
});
