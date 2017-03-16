export let array2 = [];
//init var
let min, l, k

export function selectSortStart(inputArray) {

    array2.splice(0, array2.length)

    //init the selectionsort sequence

    for (let l = 0; l < inputArray.length; l++) {
        array2.push(inputArray[l])

    }

    //init the var
    l = 0;
    min = l;
    k = l + 1;

}

export function selectionSortPlay() {


    if (l === array2.length - 1) {
        return {
            array: array2,
            isSorted: true,
        }
    }

    //check for the condition
    if (array2[k] < array2[min]) { //Compare the numbers
        min = k; //Change the current min number position if a smaller num is found
    }
    // ending condition
    k++
    if (k >= array2.length) {

        if (min !== l) {
            //After each pass, if the current min num != initial min num, exchange the position.
            //Swap the numbers
            let tmp = array2[l];
            array2[l] = array2[min];
            array2[min] = tmp;
        }
        l++
        k = l + 1
        min = l

        return {
            array: array2,
            isSorted: false,
            currentIndex: min,
            currentValue: array2[min]
        }

    }

    return {
        array: array2,
        isSorted: false,
        currentIndex: min,
        currentValue: array2[min]
    }

}
