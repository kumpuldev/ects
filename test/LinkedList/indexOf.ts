import {expect} from "chai";
import {LinkedList} from "../../index";

describe(
	"LinkedList - indexOf",
	() => {
		it(
			"should return valid element index",
			() => {
				const list = new LinkedList(1, 2, 3);
				const target = list.head.next.next;
				expect(list.indexOf(target)).eq(2);
				// @ts-expect-error
				expect(list.indexOf(2)).eq(-1);
			},
		);
	},
);
