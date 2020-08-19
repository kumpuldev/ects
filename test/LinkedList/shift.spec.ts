import {expect} from "chai";
import {LinkedList} from "../../index";

describe(
	"LinkedList - shift",
	() => {
		it(
			"remove the first element",
			() => {
				const list = new LinkedList(1, 2, 3);
				const removed = list.shift();
				expect(list).deep.eq(new LinkedList(2, 3));
				expect(list.length).eq(2);
				expect(removed.value).deep.eq(1);
			},
		);

		it(
			"should return undefined on empty LinkedList",
			() => {
				const list = new LinkedList();
				expect(list.shift()).eq(undefined);
			},
		);
	},
);
