function getSecondLargest(nums) {
  // Complete the function
  const uniqeArr = [...new Set(nums)];
  const sortedUniqeArr = uniqeArr.sort((a, b) => a - b);
  return sortedUniqeArr[sortedUniqeArr.length - 2];
}
