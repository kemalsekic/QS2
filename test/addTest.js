var assert = require('chai').assert;
var add = require('../add');

describe('Add', function(){
    it('Should add 5 and return 10', function (){
        var result = add(5);
        assert.equal(result, 10);
    });

    it('Returns type of number', function (){
        var result = add(5);
        assert.typeOf(result, 'number');
    });
});