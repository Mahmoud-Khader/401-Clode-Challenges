"use strict";
const Hashmap = require("../hashmap-left-join");

describe("LEFT JOIN TESTS", () => {
  let leftTest;
  let rightTest;
  beforeAll(() => {
    //The left hash TEST
    leftTest = new Hashmap(5000);
    leftTest.add("fond", "enamored");
    leftTest.add("warth", "anger");
    leftTest.add("diligent", "employed");
    leftTest.add("outfit", "garb");
    leftTest.add("guide", "usher");

    // The right hash TEST 
    rightTest = new Hashmap(5000);
    rightTest.add("fond", "averse");
    rightTest.add("warth", "delight");
    rightTest.add("diligent", "idle");
    rightTest.add("guide", "follow");
    rightTest.add("flow", "jam");
  });

  // return the left join between two hashmaps
  it("It Should return the left join between two hashmaps", () => {
    let expectedResults = [
      ["warth", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "NULL"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
    ];
    let hashTable = new Hashmap(5000);

    expect(hashTable.leftJoin(leftTest, rightTest)).toEqual(
      expectedResults
    );
  });

});
