// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


let nums = [1, 2, 3, 4];

// Output: [24,12,8,6]

// LSM = [1, 1, 2, 6] RSM = [24, 12, 4, 1];

var productExceptSelf = function (nums) {
    let LSM = [1];
    let product = 1;
    for (let i = 1; i < nums.length; i++) {
        product = product * nums[i - 1];
        LSM[i] = product;
    }

    //after this whole process LSM becomes = [1, 1, 2, 6]


    product = 1;

    let RSM = [];

    for (let i = nums.length - 2; i >= 0; i--) {

        product = product * nums[i + 1];

        RSM[i] = product;
    }

    RSM[nums.length - 1] = 1

    // for (let i = nums.length - 2; i >= 0; i++) {
    //     RSM[i] = product * nums[i + 1];
    // }

    let res = [];

    for(let i = 0;i < nums.length;i++){
        res[i] = LSM[i] * RSM[i];
    }

    return res;
};

let res = productExceptSelf(nums)

console.log(res);
