// 1 + 1
// console.log('Hello World')

// console.log(process.argv)

// let foo = 'abc'

// console.log(foo)

// const debug = require('debug') //require local dependency

// debug.enable('*') //enable all (*)namespaces

// const logger = debug('hello world-logger') // create logger

// logger('Testy test test')
// logger('Second testy test test')

const fs = require('fs')
// const chalk = require ('chalk-animation')
const { animateString } = require('./animate-string')
const contents = fs.readdirSync('./animals')
animateString(contents.join('\n'))
// console.log(contents)
// const animation = chalk.rainbow(
//     contents.join('\n')
//     )

debugger
// animation.stop()
// setTimeout(() => animation.stop(), 1300)