
// find the missing number;

let arr = [1, 3, 4, 5, 6, 7];

function findMissing(arr) {
    let sum = arr.reduce((acc, el) => {
        return acc + el
    }, 0)

    let n = arr[arr.length-1];

    return (((n * (n+1))) / 2) - sum;
}


console.log(findMissing(arr))