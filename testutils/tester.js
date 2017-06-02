// colors in chalk
// and (fidget) spinners by "ora"
const chalk = require('chalk')
const spin = require('ora')

const spinner = spin()

let evalcmd

const hello = 'Hello - welcome to the BYD test suite.'
const hello2 = 'Please press Ctrl-C if you changed your mind or got here by mistake. We\'ll start in 3 seconds.'

const msg = 'Testing gulpfile with standard...'
const msg2 = 'Checking exit code...'
const msg3 = 'Running gulp...'
const msg4 = 'All done!'

console.log(chalk.green(hello))
spinner.start()
setTimeout(() => {
    spinner.text = chalk.yellow(hello2)
}, 3000)
spinner.text = msg
