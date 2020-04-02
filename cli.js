import arg from 'arg'
import chalk from 'chalk'
import metar from './metar'
import processFile from './processFile'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--file': Boolean,
      '-f': '--file',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    file: args['--file'] || false,
    operand: args._[0]
  };
 }

export function cli(args) { 
  const options = parseArgumentsIntoOptions(args)
  if (!options.file) {
    const stats = metar(options.operand)
    if (stats === 'Invalid record') {
      console.log(chalk.bold.red(stats))
      return false
    }
    console.log(`
    ${chalk.bold.green('Weather Report')}
  
    Airport: ${stats.airport}
    Timestamp 
        Day: ${stats.timeStamp.day}
        Time: ${stats.timeStamp.hour}:${stats.timeStamp.minute}
    Wind
        Direction: ${stats.windInfo.direction}
        Speed: ${stats.windInfo.speed}MPS
        Gusts: ${stats.windInfo.gusts}
    `)
  } else { 
    processFile(options.operand)
  }
}


