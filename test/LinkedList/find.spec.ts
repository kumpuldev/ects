import {expect} from "chai";
import {LinkedList} from "../../index";

describe(
	"LinkedList - find",
	() => {
		const list = new LinkedList<string | number>(1, 2, 3, 4, 5);
		it(
			"should find the first element that satisfy testfn",
			() => {
				const found = list.find((element) => element.value === 2);
				expect(found.value).eq(2);
			},
		);

		it(
			"should return null if doesn't match any element",
			() => {
				const nfound = list.find((element) => element.value === "notfound");
				expect(nfound).eq(null);
			},
		);

		it(
			"find element based on the index",
			() => {
				const found = list.find((_, index) => index === 4);
				expect(found.value).eq(5);
			},
		);

		it(
			"should return the reference of the element",
			() => {
				const found = list.find((element) => element.value === 2);
				found.value = "first";
				expect(list).deep.eq(
					new LinkedList<string | number>(1, "first", 3, 4, 5),
				);
				expect(found.prev.value).eq(1);
			},
		);
	},
);
