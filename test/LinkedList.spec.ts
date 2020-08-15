import { expect } from "chai";
import { LinkedList } from "..";

describe(
  "LinkedList",
  () => {
    it(
      "should initiate list with one element",
      () => {
        const list = new LinkedList<number>(2);
        expect(list.head.value).to.eq(2);
      },
    );

    it(
      "should initiate list with multiple element",
      () => {
        const list = new LinkedList<number>(2, 3, 4, 5);
        expect(list.head.value).to.eq(2);
        expect(list.head.next.value).to.eq(3);
        expect(list.length).to.eq(4);
      },
    );

    it(
      "should push single element",
      () => {
        const list = new LinkedList<unknown>();
        list.push(12);
        expect(list.head.value).to.eq(12);
      },
    );

    it(
      "should push multiple element",
      () => {
        const list = new LinkedList<unknown>();
        list.push(12, 33, 44);
        expect(list.length).to.eq(3);
      },
    );
  },
);
