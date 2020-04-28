/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

//const w = process.stdout.columns

const FgBlack = '\x1b[30m'
const FgRed = '\x1b[31m'
const FgGreen = '\x1b[32m'
const FgYellow = '\x1b[33m'
const FgBlue = '\x1b[34m'
const FgMagenta = '\x1b[35m'
const FgCyan = '\x1b[36m'
const FgWhite = '\x1b[37m'
let w = 0
const sw = process.stdout.columns

function draw () {
  setTimeout(draw, 1000/10)
  let output = '\x1b[45m\x1b[93m'
  w = sw + 10*Math.random()
  if (w > sw){
    sw - 10*Math.random()
  }
  for (let i = 0; i < sw; i++) {
    if (Math.random() > 0.5) {
      output += FgBlue + '\x1b[5m\x1b[45m\x1b[93m' + '😁' +'░'
    } else {
      output += FgCyan + '\x1b[0m\x1b[45m\x1b[92m'+ '😩'+ '░'
    }
  }
  console.log(output)
}

draw()
