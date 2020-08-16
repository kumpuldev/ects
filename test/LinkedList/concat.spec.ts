import {expect} from "chai";
import {LinkedList} from "../../index";

describe(
	"LinkedList - concat",
	() => {
		it(
			"should throw error on invalid parameter",
			() => {
				const list = new LinkedList(1, 2);
				try {
					// @ts-expect-error
					list.concat([2, 3, 4]);
				} catch (err) {
					expect(err.message).deep.eq(
						"given parameter is not a valid LinkedList",
					);
				}
			},
		);

		it(
			"should be concat multiple LinkedList",
			() => {
				const list = new LinkedList(1, 2);
				const secondList = new LinkedList(3, 4);
				const thirdList = new LinkedList(5, 6, 7);

				expect(list.concat(secondList)).deep.eq(new LinkedList(1, 2, 3, 4));
				expect(list.concat(secondList).concat(thirdList)).deep.eq(
					new LinkedList(1, 2, 3, 4, 5, 6, 7),
				);
				expect(secondList.concat(list).concat(thirdList)).deep.eq(
					new LinkedList(3, 4, 1, 2, 5, 6, 7),
				);
				expect(list).deep.eq(new LinkedList(1, 2));
				expect(secondList).deep.eq(new LinkedList(3, 4));
				expect(thirdList).deep.eq(new LinkedList(5, 6, 7));
			},
		);
	},
);
