// colors in chalk
// shell by shelljs
// and (fidget) spinners by ora
const chalk = require('chalk')
const sh = require('shelljs')
const spin = require('ora')

// VSHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
const spinner = spin()

// Messages for spinner/logging
const hello = 'Hello - welcome to the BYD test suite.'
const hello2 = 'Please press Ctrl-C if you changed your mind or got here by mistake. We\'ll start in 3 seconds.'

const msg = 'Testing JS with standard...'
const msg2 = 'Running gulp...'
const msg3 = 'All done!'

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function test () {
  spinner.start()
  spinner.text = chalk.green(hello)
  await sleep(1500)
  spinner.text = chalk.yellow(hello2)
  await sleep(3000)
  spinner.text = msg + '\n'
  if (sh.exec('standard --fix').code !== 0) {
    spinner.fail('Style check failed - please raise a issue')
    process.exit(1)
  } else {
    spinner.succeed('Style check succeeded')
  }
  spinner.text = msg2 + '\n'
  spinner.start()
  if (sh.exec('gulp').code !== 0) {
    spinner.fail('Gulp failed for some reason... :/')
    process.exit(1)
  } else {
    spinner.succeed('Gulp ran successfully.')
  }
  spinner.succeed(chalk.green(msg3))
  process.exit(0)
}

test()
