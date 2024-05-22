import { it } from "node:test";
import { assert } from "node:console";
import { deepEqual } from "node:assert";
import { LinkedList } from "./linked-list";

it("can be appended to", async () => {
  const linkedList = new LinkedList();

  linkedList.insert(1);
  linkedList.insert(2);

  assert(deepEqual(linkedList.toArray(), [1, 2]));
});

it("can be inserted into at a specific index", async () => {
  const linkedList = new LinkedList();

  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);

  linkedList.insertAt(1, 4);

  assert(deepEqual(linkedList.toArray(), [1, 4, 2, 3]));
});

it("can be deleted from at a specific index", async () => {
  const linkedList = new LinkedList();

  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);

  linkedList.delete(1);

  assert(deepEqual(linkedList.toArray(), [1, 3]));
});

it("can return the value at a specific index", async () => {
  const linkedList = new LinkedList();

  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);

  assert(linkedList.get(1) === 2);
});

it("can return the index of a value", async () => {
  const linkedList = new LinkedList();

  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);

  assert(linkedList.find(2) === 1);
  assert(linkedList.find(4) === -1);
});

it("can return the length of the linked list", async () => {
  const linkedList = new LinkedList();

  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);

  assert(linkedList.length() === 3);
});
