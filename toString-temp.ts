//toString() {
//  const precision = 6
//  const threshold = 1000
//  const edgeitems = 3
//  const width = 80

//  let data = this.toFloat32Array()

//  // Decide which number format to use
//  let format: (x: number) => string
//  if (data.every((x) => x % 1 === 0 && (Math.floor(Math.log10(x)) + 1) < precision)) {
//    // All integers and have less than precision num of digits
//    let maxLength = data.reduce((r, x) => x.toFixed(0))
//    format = (x) => x.toFixed(0).padStart(precision, ' ')
//  } else {
//    let maxIntLength = 0
//    let maxFracLength = 0
//    let useScientific = false
//    for (let x of data) {
//      let [intLength, fracLength] = x.toString().split('.').map((s) => s.length)
//      if (intLength > maxIntLength) {
//        maxIntLength = intLength
//      }
//      if (fracLength > maxFracLength) {
//        maxFracLength = fracLength
//      }
//      if (maxIntLength + maxFracLength > precision) {
//        useScientific = true
//      }
//    }
//    if (useScientific) {
//      format = (x) => x.toExponential(precision - 1) // toExponential does not count the leading digit before the decimal point
//    } else {
//      // All numbers have less than precision num of digits
//      format = (x) => x.toString().padStart(precision + 1, ' ') // + 1 for the dot
//    }
//  }

//  let out = 'Tensor{'
//  let padLength = 7 // 'Tensor{'
//  const basePad = ' '.repeat(padLength)

//  let idx = 0
//  let level = 0
//  const dimensionality = this.shape.length
//  let pos = this.shape.map(() => 0)
//  let lastPos = 0
//  while (idx < data.length) {
//    if (lastPos === 0) {
//      if (idx !== 0) {
//        out += basePad
//      }
//      out += ' '.repeat(level) + '['.repeat(dimensionality - level)
//    }
//  }

//  return `Tensor[id=${this.ptr}]`
//}
