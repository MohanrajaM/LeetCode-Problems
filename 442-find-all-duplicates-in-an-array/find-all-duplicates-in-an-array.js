/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

      const seen = new Set();
    const duplicates = [];

    for (const n of nums) {
        if (seen.has(n)) {
            duplicates.push(n);
        } else {
            seen.add(n);
        }
    }

    return duplicates;
};