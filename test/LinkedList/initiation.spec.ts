import {LinkedList} from "../../index";
import {expect} from "chai";

describe(
	"LinkedList - Initiation",
	() => {
		it(
			"should initiate list without value",
			() => {
				const list = new LinkedList();
				expect(list.length).eq(0);
				expect(list.head).eq(null);
				expect(list.tail).eq(null);
			},
		);

		it(
			"should initiate list with single value",
			() => {
				const list = new LinkedList(100);
				expect(list.length).eq(1);
				expect(list.head.value).eq(100);
				expect(list.tail.value).eq(100);
			},
		);

		it(
			"should initiate list with multiple value",
			() => {
				const list = new LinkedList(1, 2, 3);
				expect(list.length).eq(3);
				expect(list.head.value).eq(1);
				expect(list.head.next.value).eq(2);
				expect(list.head.next.next.value).eq(3);

				expect(list.tail).eq(list.head.next.next);
				expect(list.tail.next).eq(null);
				expect(list.tail.value).eq(3);
				expect(list.tail.prev.value).eq(2);
				expect(list.tail.prev.prev.value).eq(1);
			},
		);
	},
);
