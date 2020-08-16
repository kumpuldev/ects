import {LinkedList} from "../../index";
import {expect} from "chai";

describe(
	"LinkedList - Push",
	() => {
		const list = new LinkedList<unknown>(1);
		it(
			"should return correct length",
			() => {
				expect(list.push(2)).eq(2);
				expect(list.tail.value).eq(2);
			},
		);

		it(
			"should push multiple element",
			() => {
				list.push(3, 4);
				expect(list).deep.eq(new LinkedList(1, 2, 3, 4));
			},
		);

		it(
			"should push mixed element",
			() => {
				list.push({hello: "world"}, [1, 2, 3], "first");
				expect(list).deep.eq(
					new LinkedList<unknown>(
						1,
						2,
						3,
						4,
						{hello: "world"},
						[1, 2, 3],
						"first",
					),
				);
			},
		);
	},
);
