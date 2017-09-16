module.exports = function multiply(first, second) {
  var firstArray = first.split("").reverse();
  var secondArray = second.split("").reverse();
  var result = [];

  for (var i = 0; i < firstArray.length; i++) {
      for (var j = 0; j <secondArray.length; j++) {
          var index = i + j;
          if (index >= result.length) result[index] = firstArray[i] * secondArray[j]
            else result[index] = firstArray[i] * secondArray[j] + result[index];
          if (result[index] > 9) {
            if ((index + 1) >= result.length) result[index + 1] = Math.floor(result[index] / 10)
              else result[index + 1] = Math.floor(result[index] / 10) + result[index + 1];
            result[index] -= Math.floor(result[index] / 10) * 10;
          }
      }
  }
  return result.reverse().join("");
}
