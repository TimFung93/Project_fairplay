// export let array = []
// export let sorted = []


// // visualization #1 array = [12, 24, 3, 5, 10]
// // mergePlay1: mergeArray = {left: [12,24,3], right: [5,10], level: 0 }


// // mergePlay2: mergeArray =     {left: 
// //                                 {left:[12,24], right: [3], level: 1}
// //                                 right: {left: [5], right:[10]}  }


// // mergePlay3: mergeArray = {left: 
// //                             {left: 
// //                                 {left: [12], right: [24]},right: [3]} 
// //                                 right: {left: [5], right: [10]}} 


// // mergePlay4: mergeArray = {left: 
// //                             {left: [12,24]}, right: [3]}, 
// //                         right: [5,10]}



// // mergePlay5: mergeArray = {left: 
// //                             {left: [3, 12,24]}, 
// //                         right: [5,10]}


// // visualation # 2 mergePlay6: mergeArray = {left: 
// //                                             {left: [3,5,12,24] , right: [10]}



// // mergePlay7: mergeArray = {left:[3,5,10,12,24]}

// // - Are there arrays of length greater than 2?
// // - if yes, break into object with left/right
// // - if no, do the sorting stuff and merging stuff


// // [12, 24] [3]
// // [3, 12, 24] [5, 10]


// // part of the object may have a level
// const  node = {data: [1, 3, 5, 4, 5]}

// // let bst = new BinarySearchTree() 


// export function mergeSort(arr) {



//     if (arr.length < 2)
//         return arr;
 
//     let middle = parseInt(arr.length / 2);
//     let left   = arr.slice(0, middle);
//     let right  = arr.slice(middle, arr.length);



//     //call the node
//     //set the state

  
//         return merge(mergeSort(left, node.left), mergeSort(right, node.right))

//     //schedule a time out 
// }
 
// export function merge(left, right) {
//     let result = [];
    
//     while (left.length && right.length) { // while the length is true
//         if (left[0] <= right[0]) {  // and this is true
//             result.push(left.shift()); // push it into result
//         } else {
//             result.push(right.shift()); // else push right index into new array
//         }
//     }
 
//     while (left.length)
//         result.push(left.shift());
 
//     while (right.length)
//         result.push(right.shift());

    
//     node.data = result;

//     return result;
// }



// //step one make mergeStart 

// let middle, left, right;


// export function mergeStart(inputArray) {
//     array.splice(0,inputArray.length)

//     for (let i = 0; i < inputArray.length; i++) {
//         array.push(inputArray[i])
//     }
//     // bst.push(new Node(array))
//     console.log(array)

//      if (array.length < 2) {
//          return array
//     }
// }


// //left and right arent changeing

// ////////////////////////////////////////////////////////////////////////////////////////
// //new Node(Array) ==> {[0,1,3,6,7,8], next: null}
// //run left/right split on node.value
// //node.value = leftArray
// //node.next = new Node(rightArray)
// //{value: [0,1,3], next: { value: [6,7,8], next: null}}

// //tmpNode = node
// //while(tmpNode.next != null) {
//     //newNode = splitData(tmpNode)
//     //newNode.next = splitData(tmpNode.next)
//     //tmpNode = node.next
//     //node = newNode
//     //
// //}

// //merge
// //check value of node.value against node.next.value
// //do a merge
// //    


// export function mergePlay() {
    
//      middle = parseInt(array.length / 2);
//      left = array.slice(0, middle);
//      right = array.slice(middle, array.length);

//      //


//     if(left.length && right.length) {
//         // console.log('=====================')
//         // console.log(left)
//         // console.log(right)
//         // console.log('=====================')
//         if(left[0] <= right[0]) {
//             sorted.push(left.shift());
//             // console.log(sorted)
//             // console.log('i am left after <= ' + left)
//             // console.log('i am right after <=' + right)
//         } else {
//             //console.log(sorted)
//             sorted.push(right.shift());
//             // console.log('i am left after else ' + left)
//             // console.log('i am right after else ' + right)
//         }
//     }

//     if (left.length) {
//         // console.log('=================================')
//         // console.log('I am left after push [0] interation ' + left)
//         sorted.push(left.shift());

//     }

//     if (right.length) {
//         // console.log('I am right after push [0] interation ' + right)
//         sorted.push(right.shift());
//          // console.log('=================================')
//     }

//     sorted = left.concat(right)
//     // console.log('i am sorted after push        ' + sorted)
//     // console.log('=================')
//     // console.log('I am the middle value of the array ' + middle)
//     // console.log('I am left ' + left )
//     // console.log('I am right ' + right)
//     // console.log(array)
//     // console.log(sorted)
//     // console.log(array)
//     // console.log('=================')
//     // console.log(sorted)

//             return {
//                 array: sorted
//             }    
//                         // if (right) {
//                         //     return {
//                         //         array: sorted,
//                         //         isSorted: true
//                         //     }
//                         // }
// }




export let node = {
    data: []
}


export function mergeSort(node) {

  //sorts the left first 

    if (node.data.length < 2)
        return node;
 
    let middle = parseInt(node.data.length / 2);
    let left   = node.data.slice(0, middle);
    let right  = node.data.slice(middle, node.data.length);

    node.left = { data: left}
    node.right = { data: right}
    


 
    //call the node
    //console.log(node)
   
    //set the state while it is in setting up


    //setTimeout(function() { 
    
    return merge(mergeSort(node.left), mergeSort(node.right))
    //},1000)
    //schedule a time out 
}
 
export function merge(leftnode,rightnode) {
    
    let newLeft = Array(leftnode.data)
    let newRight = Array(rightnode.data)
    let result = {
        sorted: []
    }

   // console.log(leftnode)
    //console.log(rightnode)
    //console.log('i am leftnode.data '  + leftnode.data.left)
    while (newLeft.length && newRight.length ) { // while the length is true
        if (newLeft[0] <= newRight[0]) {
            if (newLeft[0] || newRight[0])
            result.sorted.push(newLeft.shift()); // push it into result
        } else {
            if (newRight[0]) {
            result.sorted.push(newRight.shift()); // else push right index into new array
        } else {
            newRight.shift()
        }
        }
    }
    //console.log(result)
    while (newLeft.length)  
        result.sorted.push(newLeft.shift());
      
    while (newRight.length)
        result.sorted.push(newRight.shift());
       
    //console.log(result)




    
    let merger = result.sorted

    let lastMerge = result.sorted.concat.apply([],merger)
    console.log(lastMerge)  



    
        return result;
}















