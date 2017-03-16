export function randomArray() {
    let array = [];
    let max = 70;
    let i = 0;
    while (i <= max) {
        let randomNumber = Math.floor(Math.random() * 9) + 1
        array.push(randomNumber)
        i++
    }
    //console.log(array)
    return array
}

export function compareArrayLarge() {
    let array = [];
    let max = 50;
    let i = 0;
    while (i <= max) {
        let randomNumber = Math.floor(Math.random() * 9) + 1
        array.push(randomNumber)
        i++
    }
    //console.log(array)
    return array
}
