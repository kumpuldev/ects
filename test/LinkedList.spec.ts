import {expect} from "chai";
import {LinkedList} from "../index";

describe(
	"LinkedList",
	() => {
		it(
			"should initiate list with one element",
			() => {
				const list = new LinkedList<number>(2);
				expect(list.head.value).eq(2);
			},
		);

		it(
			"should initiate list with multiple element",
			() => {
				const list = new LinkedList<number>(2, 3, 4, 5);
				expect(list.head.value).eq(2);
				expect(list.head.next.value).eq(3);
				expect(list.length).eq(4);
			},
		);

		it(
			"should determine whether the given value is an LinkedList",
			() => {
				expect(LinkedList.is([2, 3])).eq(false);
				const list = new LinkedList(2, 3);
				expect(LinkedList.is(list)).eq(true);
			},
		);

		it(
			"should conver iterable object into LinkedList",
			() => {
				const list = LinkedList.from([2, 3, 4, 5]);
				expect(LinkedList.is(list)).eq(true);
				expect(list.length).eq(4);
				expect(list.head.value).eq(2);
			},
		);

		it(
			"should push single element",
			() => {
				const list = new LinkedList<unknown>();
				list.push(12);
				expect(list.head.value).eq(12);
			},
		);

		it(
			"should push multiple element",
			() => {
				const list = new LinkedList<unknown>();
				list.push(12, 33, 44);
				expect(list.length).eq(3);
			},
		);
	},
);
