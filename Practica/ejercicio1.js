// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock,
//  determine how many pairs of socks with matching colors there are.



// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.


/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    const sockCounts = {};
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        const sock = ar[i];
        sockCounts[sock] = (sockCounts[sock] || 0) + 1;

        if (sockCounts[sock] % 2 === 0) {
            pairs++;
        }
    }

    return pairs;
}

sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20] );