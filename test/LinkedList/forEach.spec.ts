import {expect} from "chai";
import {LinkedList} from "../../index";

describe(
	"LinkedList - forEach",
	() => {
		it(
			"should iterate and invoke testfn",
			() => {
				const list = new LinkedList(1, 2, 3, 4);
				const arr = [];
				list.forEach((element) => {
					arr.push(element.value);
				});

				expect(arr).deep.eq([1, 2, 3, 4]);
			},
		);
	},
);
