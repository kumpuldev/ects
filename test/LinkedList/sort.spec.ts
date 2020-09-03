import {LinkedList} from "../../index";
import {expect} from "chai";

describe(
	"LinkedList - Push",
	() => {
		it(
			"should perform sort with default sort method",
			() => {
				const list = new LinkedList<string>("Mar", "Jan", "Feb");
				expect(list.sort()).deep.eq(new LinkedList("Feb", "Jan", "Mar"));
			},
		);

		it(
			"should perform sort with custom sort method",
			() => {
				const list = new LinkedList<string>("0000", "00", "000");
				expect(
					list.sort((el1, el2) => {
						return el1.value.length > el2.value.length ? -1 : 1;
					}),
				).deep.eq(new LinkedList("00", "000", "0000"));
			},
		);
	},
);
