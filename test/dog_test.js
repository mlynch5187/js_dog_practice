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

  it('should have a color', function() {
    var fido = new Dog('Fido', 'Black');

    assert.equal(fido.color, 'Black');
  });

  it('should be black by default', function() {
    var fido = new Dog('Fido');

    assert.equal(fido.color, 'Black');
  });

  it('should not be a color other than black by default', function() {
    var fido = new Dog('Fido', 'Red');

    assert.equal(fido.isBlack(), false);
  });

  it('should be able to bark', function() {
    var fido = new Dog('Fido');

    assert.equal(fido.Bark(), 'Woof!');
  });

  it('should be able to say a message', function()  {
    var fido = new Dog('Fido');

    assert.equal(fido.Says('Yap!'), '**;* Yap! *;**');
  });
});
