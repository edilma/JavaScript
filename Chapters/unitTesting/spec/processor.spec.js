const assert = require('assert');
const processor = require('../processor.js');
const myTestTransmission = require('../processor.js');

describe("transmission processor", function() {

   it("takes a string and returns an object", function(){
      let result = processor("9701::<489584872710>");
      assert.strictEqual(typeof result, "object");
   });

   it("Should be true if the word is hola", function(){
       let answer = myTestTransmission("hola", true)
   });

});
  
