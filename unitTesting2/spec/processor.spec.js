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

    it("returns id in object", function() {
        let result = processor("9701::<489584872710>");
        assert.notStrictEqual(result.id, undefined);
      });

    it("converts id to a number", function() {
        let result = processor("9701::<489584872710>");
        assert.strictEqual(result.id, 9701);
     });

     it ("Should return rawData in object", function(){
         let result = processor("9701::<489584872710>");
         assert.strictEqual(result.rawData, undefined);
     });

     it("returns -1 for rawData if missing < at position 0", function() {
        let result = processor("9701::487297403495720912>");
        assert.strictEqual(result.rawData, -1);
     });

});