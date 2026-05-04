let num = 32;

function findEvenorOdd(num) {
    return num & 1 ? "false" : "true";
}

let res = findEvenorOdd(num);

console.log(res);

//is power of 2;

function isPowerOfTwo(n) {
    if (n <= 0) return false;
    if (n & (n - 1)) {
        return false;
    }
    else {
        return true;
    }
};

console.log(isPowerOfTwo(64));