function threeSum(arr, target) {
  //your code here

	function threeSum(nums, target) {
  arr.sort((a,b) => a - b);
    let closestSum = arr[0] + arr[1] + arr[2];
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return closestSum;
}

module.exports = threeSum;
