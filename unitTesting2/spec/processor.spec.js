const assert = require('assert');
const processor = require('../processor');

describe("words processor", function(){
    
    it ("takes a string and returns an object", function(){
        let result= processor("mi::casa");
        assert.strictEqual(typeof result, "object");
    });
    
    it("should return -1 if doesn't contain ::", function(){
        let result = processor("9701<489584872710>");
        assert.strictEqual(result,-1);
    });

    it ("Should return id in object", function(){
        let result = processor("9701::<489584872710>");
        assert.strictEqual(result.id, undefined);
    });

});