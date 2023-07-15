function unicFn(initialArray) {
    let uniqueArray = [];
    for (let i = 0; i < initialArray.length; i++) {
        if (uniqueArray.indexOf(initialArray[i]) === -1) {
            uniqueArray.push(initialArray[i]);
        }
    }
    console.log(uniqueArray);
}

let array = [2, 3, 1, 3, 3, 7];
unicFn(array);

let array2 = ["a", "b", "b", "c", "d", "d", "e"];
unicFn(array2);