/*--------------------string, multi pointer, hash table, map, sliding window
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/*
1.right pointer go right, untill contain t, count = 0
2.left pointer go right, deal extral char
3.left pointer meet first non extral, exit while, return min
*/
var minWindow = function(s, t) {
  let min = ''
  let left = 0
  let right = -1
  let map = {}

  t.split('').forEach(element => {
    if (map[element] == null) map[element] = 1
    else map[element] += 1
  })

  let count = Object.keys(map).length

  while (right <= s.length) {
    if (count === 0) {
      let current = s[left]

      if (map[current] != null) map[current]++
      if (map[current] > 0) count++

      let tmp = s.substring(left, right + 1)
      if (min === '') min = tmp
      else min = tmp.length < min.length ? tmp : min

      left++
    } else {
      right++
      let current = s[right]

      if (map[current] != null) map[current]--
      if (map[current] === 0) count--
    }
  }

  return min
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
/*---------------------------------------------------------No.2
var minWindow = function(s, t) {
  const counter = new Counter(t);
  let start = 0;
  let output = s.repeat(2);
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nIncomplete <= 0) {
      const substringLength = i - start + 1;
      if (substringLength < output.length) {
        output = s.substring(start, i + 1);
      }
      counter.delete(s[start]);
      start += 1;
    }
  }
  return output.length <= s.length ? output : '';
};

class Counter {
  constructor(target) {
    this.freq = {};
    this.nIncomplete = target.length;
    for (const c of target) {
      this.freq[c] = (this.freq[c] || 0) + 1;
    }
  }

  add(c) {
    if (!(c in this.freq)) {
      return;
    }
    this.freq[c] -= 1;
    if (this.freq[c] >= 0) {
      this.nIncomplete -= 1;
    }
  }

  delete(c) {
    if (!(c in this.freq)) {
      return;
    }
    this.freq[c] += 1;
    if (this.freq[c] > 0) {
      this.nIncomplete += 1;
    }
  }
}
*/
