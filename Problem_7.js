function getEvenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));