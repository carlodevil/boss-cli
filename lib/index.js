#!/usr/bin/env node
const yargs = require('yargs')
const { create } = require('./src/create/init')

yargs
.scriptName("boss")
.usage('$0 <cmd> [args]')
.command('init', 'Creates a new Boss monorepo.', (argv) => create(argv))
.help()
.argv

// .command('hello [name]', 'welcome ter yargs!', (yargs) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'Cambi',
//       describe: 'the name to say hello to'
//     })
//   }, function (argv) {
//     console.log('hello', argv.name, 'welcome to yargs!')
//   })