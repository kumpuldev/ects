import {LinkedList} from "../../index";
import {expect} from "chai";

describe(
	"LinkedList - it",
	() => {
		it(
			"should correctly determine passed value",
			() => {
				const o = new Object();
				expect(LinkedList.is(o)).eq(false);

				const str = "hello world";
				expect(LinkedList.is(str)).eq(false);

				const arr = [1, 2, 3];
				expect(LinkedList.is(arr)).eq(false);

				expect(LinkedList.is(new LinkedList(...arr))).eq(true);
			},
		);
	},
);
