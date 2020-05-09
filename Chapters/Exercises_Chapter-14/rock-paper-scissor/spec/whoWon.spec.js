const whoWon = require ('../whoWon.js');
const assert = require('assert');

describe("whoWon Function", function(){

    it("Should return TIE", function(){
        let output = whoWon("word","word");
        assert.strictEqual(output,'TIE!' )
    });


    it("Should return TIE", function(){
        let output = whoWon("rock","paper");
        assert.strictEqual(output,'Player 2 wins!' )
    });

    it("Should return TIE", function(){
        let output = whoWon("paper","scissors");
        assert.strictEqual(output,'Player 2 wins!' )
    });

    it("Should return TIE", function(){
        let output = whoWon("scissors","rock ");
        assert.strictEqual(output,'Player 2 wins!' )
    });

    it("Should return TIE", function(){
        let output = whoWon("rock ","scissors");
        assert.strictEqual(output,'Player 1 wins!' )
    });

    it("Should return TIE", function(){
        let output = whoWon("paper","rock ");
        assert.strictEqual(output,'Player 2 wins!' )
    });

});