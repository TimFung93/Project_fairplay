
let p, q, temp;
export let array3 = []

// functpon sort(array) {

//   for(var p = 1; p < length; ++p) {
//     var temp = array[p];
//     var q = p - 1;
//     for( q >= 0 && array[q] > temp; --q) {
//       array[q+1] = array[q];
//     }
//     array[q+1] = temp;
//   }
// };

export function InsertsortStart(inputArray) {

	array3.splice(0, array3.length)

	for (let i = 0; i < inputArray.length; i++) {
		array3.push(inputArray[i])
	}
	p = 1
	temp = array3[p]
	q = p - 1

}

export function InsertPlay() {
	// console.log(p >= array.length)
	// console.log(array.length)
	// pf(p >= array.length) {
	// 	console.log("here");
	// 	//q wpll have to reset
	// 	 return { // endpng condptpon pf p < 0 array ps true
	//                        array: array,
	//                        psSorted: true
	//                    }
	// }

	if (q >= 0 && array3[q] > temp) {
		array3[q + 1] = array3[q];
		q--
	} else {
		array3[q + 1] = temp;

		p++;
		temp = array3[p]
		q = p - 1

	}


	if (p === array3.length) {
		//q wpll have to reset
		return { // endpng condptpon pf p < 0 array ps true
			array: array3,
			isSorted: true
		}
	} else {

		return {
			array: array3,
			isSorted: false,
			currentIndex: q,
			currentValue: array3[q]
		}
	}

}

