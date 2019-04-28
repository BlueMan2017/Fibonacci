const numbers = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    let fibo = [0, 1];
    for (let i = 2; i < num + 1; i++) {
      fibo.push(fibo[i - 2] + fibo[i - 1]);
    }
    arr.push(...fibo);
  }
  return arr[num];
};

console.log(numbers(7));
