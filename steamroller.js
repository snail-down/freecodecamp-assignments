/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    var value = arr[i];
    if (Array.isArray(value)) {
      steamrollArray(value, result);
    } else {
      result.push(value);
    }
  }
  console.log(result);
  return result;
}

//steamrollArray([1, [2], [3, [[4]]]]);

//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.