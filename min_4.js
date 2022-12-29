function factorial(num) {
  let f = 1;
  for (let i = 1; i <= num; i++) {
  f *= i
  }
  return f
}
console.log('factorial')