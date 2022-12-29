let arrPerf = []
function checkPerf(min, max) {
  for (let j = min; j <= max; j++) {
    let sumDiv = 0
    for (let i = 1; i < j; i++) {
      if (j % i == 0) {
        sumDiv += i
      }
    }
    if (sumDiv == j) {
      arrPerf.push(j)
    }
  }
  if (arrPerf.length == 0) {
    console.log('there\'re no perfect numbers in this range')
  } else {
  console.log(arrPerf)
  }
}

console.log('checkPerf')