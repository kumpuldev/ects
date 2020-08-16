import {expect} from "chai";
import {LinkedList} from "../../index";

describe(
	"LinkedList - toArray",
	() => {
		it(
			"should convert LinkedList into array",
			() => {
				const list = new LinkedList(1, 2, 3);
				expect(list.toArray()).deep.eq([1, 2, 3]);
			},
		);
	},
);
