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

		it(
			"should give correct index",
			() => {
				const list = new LinkedList(1, 2, 3, 4);
				const arr = [];
				list.forEach((_, idx) => {
					arr.push(idx);
				});
				expect(arr).deep.eq([0, 1, 2, 3]);
			},
		);

		it(
			"should give corrent linkedList reference",
			() => {
				const list = new LinkedList(1, 2);
				const arr = [];
				list.forEach((_, idx, ll) => {
					arr.push(ll);
				});

				expect(arr[0]).eq(list);
				expect(arr[1]).eq(list);
			},
		);

		it(
			"should throw an error on invalid args",
			() => {
				const list = new LinkedList(1, 2, 3);
				try {
					// @ts-expect-error
					list.forEach();
				} catch (err) {
					expect(err.message).eq("a valid callback argument is required!");
				}

				try {
					// @ts-expect-error
					list.forEach("string");
				} catch (err) {
					expect(err.message).eq("a valid callback argument is required!");
				}

				try {
					list.forEach(null);
				} catch (err) {
					expect(err.message).eq("a valid callback argument is required!");
				}

				try {
					// @ts-expect-error
					list.forEach([]);
				} catch (err) {
					expect(err.message).eq("a valid callback argument is required!");
				}

				try {
					// @ts-expect-error
					list.forEach({});
				} catch (err) {
					expect(err.message).eq("a valid callback argument is required!");
				}
			},
		);
	},
);
