function checkPerf(num) {
  let sumDiv = 0
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sumDiv += i
    }
  }
  if (sumDiv == num) {
    console.log(`${num} is perfect`)
  }
  else {
    console.log(`${num} is not perfect`)
  }
}
console.log('checkPerf')