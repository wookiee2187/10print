/*
  Author - Neha Lingareddy
  Last updated - June 7th 2020
  I wanted to focus on the quarantine experience, which is why the emojis
  are separated from each other. I was feeling particularly angsty when
  I was doing this experiment, which is why the happy emojis are blinking.
  I wanted to show how social interaction online and social media in general
  was giving a temporary rush of dopamine in these times when everyone's
  isolated.
  Source -
  https://nbriz.github.io/intermediate-netart/notes/javascript/index.html
*/

// colors I use for the walls
const FgBlue = '\x1b[34m'
const FgCyan = '\x1b[36m'

// variables I use in the draw function
let w = 0
const sw = process.stdout.columns

// my main draw function
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
