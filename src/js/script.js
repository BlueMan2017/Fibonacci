function fibonacci(i) {
  let arr = [];
  let fib = n => {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  };
  let num = fib(i);
  for (let i = 0; i < num; i++) {
    arr.push(1);
  }
  return arr.length;
}

console.log(fibonacci(1));

function fibo(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibo(1));
