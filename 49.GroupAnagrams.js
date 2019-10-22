/*---------------------------string, map, hash table
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length < 1) return []
  let map = new Map()

  for (let i = 0; i < strs.length; i++) {
    let key = [...strs[i]].sort().join('')
    if (map.has(key)) map.get(key).push(strs[i])
    else map.set(key, [strs[i]])
  }

  return [...map.values()]
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

/*---------------------------------------------------------No.2
var groupAnagrams = function(strs) {
  let obj = [...strs].reduce((object, str) => {
    let key = [...str].sort().join('')

    if (!object[key]) {
      object[key] = [str]
    } else {
      object[key].push(str)
    }

    return object
  }, {})

  return Object.values(obj)
}
*/
