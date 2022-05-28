var assert = require('chai').assert;
var first = require('../first');

describe('First', function(){
    it('First should return hello world', function (){
        assert.equal(first(), 'hello world');
    });
});