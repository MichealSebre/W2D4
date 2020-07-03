describe("All Test", function() {

    it("Removed banned String ", function() {
        assert.equal(filterWord.remove("This house is not nice!"),
            "This house is  nice!");

    });

    it("Bubble sort for  [6,4,0, 3,-2,1] are", function() {
        assert.equal([6,4,0, 3,-2,1].bubbleSort_algo(),JSON.stringify([-2, 0, 1, 3, 4, 6]));

    });

});