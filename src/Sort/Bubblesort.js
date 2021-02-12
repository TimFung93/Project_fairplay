

let i, j;
export let array = []; // init array to be accessed in component

export function startBubbleSort(inputArray) {

    array.splice(0, array.length)
    //init the var and array
    for(let i = 0; i < inputArray.length; i++) {
        array.push(inputArray[i])
    }

    i = array.length - 1
    j = 0

}

export function bubblePlay(array){
    console.log("I am array", array)
    // test to see if we are at the limits of the for


    // do the step
      if (array[j + 1] < array[j]) {
                 let temp = array[j];

                 array[j] = array[j + 1];

                 array[j + 1] = temp;

             }


    // incremeent or decrement i, j to what this for loop
    //      iteration would have
        j++
            if (j > i) {
                i--
                j = 0
                if (i < 0){
                    return { // ending condition if i < 0 array is true
                        array: array,
                        isSorted: true
                    }
                }
            }
        return {
            array: array,
            isSorted: false,
            currentIndex: j,
            currentValue: array[j],
            nextValue: j + 1
        };
 }



export function bubbleStep(arr) {
    let i, j;
     let counter = 1
     for (i = arr.length - 1; i >= 0; i--) {

         for (j = 0; j <= i; j++) {
             if (arr[j + 1] < arr[j] && counter <= 1) {
                 let temp = arr[j];

                 arr[j] = arr[j + 1];
                 arr[j + 1] = temp;

                 counter++
             }
         }
     }


     return arr;
 }

