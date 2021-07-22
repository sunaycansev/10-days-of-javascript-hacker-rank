/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
  return nums.map((el) => {
    if (el % 2 === 0) {
      return el * 2;
    } else {
      return el * 3;
    }
  });
};
