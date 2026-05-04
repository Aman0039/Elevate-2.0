//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

//output : [[7,4,1],[8,5,2],[9,6,3]]

var rotate = function (matrix) {
    const n = matrix.length;

    // transpose the array
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // console.log(matrix) // output : [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]

    // reverse the every row of the matrix.
    for (let row of matrix) {
        row.reverse();
    }

    return matrix;
};

let res = rotate(matrix);

console.log(res);