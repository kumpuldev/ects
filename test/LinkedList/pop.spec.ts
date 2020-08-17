import {LinkedList, ListNode} from "../../index";
import {expect} from "chai";

describe(
	"LinkedList - pop",
	() => {
		it(
			"should pop the last element",
			() => {
				const list = new LinkedList(1, 2, 3, 4);
				const poped = list.pop();
				expect(poped).deep.eq(new ListNode(4));
				expect(list).deep.eq(new LinkedList(1, 2, 3));
				expect(list.length).eq(3);
			},
		);

		it(
			"pop empty list should return undefined",
			() => {
				const list = new LinkedList();
				expect(list.pop()).eq(undefined);
			},
		);
	},
);
