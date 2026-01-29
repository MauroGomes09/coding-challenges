let d = 2;
let arr = [1, 2, 3, 4, 5];

function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
        arr.push(arr.shift());
    }
    return arr;
}

