"use strict";
const Hashmap = require("../hashtable");

describe("HASH TABLE TESTS", () => {
  let hashTable;
  beforeAll(() => {
    hashTable = new Hashmap(5000);
    hashTable.add("name", "mahmoud");
    hashTable.add("age", "26");
    hashTable.add("cat", "abuKarsh");
  });

  it("It Should check the key/value in your hashtable results ", () => {
    const hash1 = hashTable.hash("name");
    const hash2 = hashTable.hash("age");
    const hash3 = hashTable.hash("cat");
    expect(hashTable.storage[hash1].head.value).toEqual({ name: "mahmoud" });
    expect(hashTable.storage[hash2].head.value).toEqual({age: "26" });
    expect(hashTable.storage[hash3].head.value).toEqual({ cat: "abuKarsh" });
    expect(hashTable.storage[hash3].head.value["cat"]).toEqual("abuKarsh");
  });


  it("It Should be check the retrieving based on a key returns the value stored", () => {
    expect(hashTable.get("name")).toEqual("mahmoud");
    expect(hashTable.get("age")).toEqual("26");
    expect(hashTable.get("cat")).toEqual("abuKarsh");
  });


  it("It Should Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(hashTable.get("test1")).toBeNull();
    expect(hashTable.get("test2")).toBeNull();
  });


  it("It Should handle a collision within the hashtable", () => {
    hashTable.add("act", "OmKarsh");
    const hash3 = hashTable.hash("cat");
    expect(hashTable.storage[hash3].head.value).toEqual({
      cat: "abuKarsh",
    });
    expect(hashTable.storage[hash3].head.next.value).toEqual({
      act: "OmKarsh",
    });
  });


  it("It Should retrieve a value from a bucket within the hashtable that has a collision", () => {
    hashTable.add("act", "OmKarsh");

    expect(hashTable.get("cat")).toEqual("abuKarsh");
    expect(hashTable.get("act")).toEqual("OmKarsh");
  });


  it("It should hash a key to an in-range value", () => {
    const hashINRange = hashTable.hash("name");

    expect(hashINRange).toBeLessThan(hashTable.storage.length);
    expect(hashINRange).toBeLessThan(5000);
  });


  it("It Should test the hash if it contains a key or not", () => {
    expect(hashTable.contains("name")).toBeTruthy();
    expect(hashTable.contains("test")).toBe(false);
  });
});