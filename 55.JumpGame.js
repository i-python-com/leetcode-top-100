/*---------------------------array, index, greedy
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let prevMaxJump = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (prevMaxJump < i) return false

    prevMaxJump = Math.max(prevMaxJump, i + nums[i])
  }

  return true
}

/*---------------------------------------------------------No.2
var canJump = function(nums) {
  let goal = nums.length - 1;
  for (let i = nums.length-2; i>=0; i--){
      if (i+nums[i] >= goal) goal = i;
  }
  return goal === 0;
};
*/
