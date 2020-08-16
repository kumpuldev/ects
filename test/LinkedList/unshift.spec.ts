import {LinkedList} from "../../index";
import {expect} from "chai";

describe(
	"LinkedList - unshift",
	() => {
		const list = new LinkedList<unknown>(1);
		it(
			"should return correct length",
			() => {
				expect(list.unshift(2)).eq(2);
				expect(list.head.value).eq(2);
				expect(list.tail.value).eq(1);
			},
		);

		it(
			"should unshift multiple element",
			() => {
				list.unshift(4, 3);
				expect(list).deep.eq(new LinkedList(4, 3, 2, 1));
			},
		);

		it(
			"should unshift mixed element",
			() => {
				list.unshift({hello: "world"}, [1, 2, 3], "first");
				expect(list).deep.eq(
					new LinkedList<unknown>(
						{hello: "world"},
						[1, 2, 3],
						"first",
						4,
						3,
						2,
						1,
					),
				);
			},
		);
	},
);
