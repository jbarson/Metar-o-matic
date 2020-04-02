// const minimist = require('minimist')

export function cli(args) { 
  console.log(args)
  // const report = minimist(process.argv.slice(2))._[0]
  // const reportItems = report.split(' ')
  // const airport = reportItems[0]
  // const timeString = reportItems[1]
  // const windString = reportItems[2]
  // const windVelocityMultiplier = windString.endsWith('S') ? 1 : 2
  // const windVelocity = windString.slice(3, /[a-z]/i.exec(windString).index) * windVelocityMultiplier
  // const gustVelocity = () => {
  //   if (windString.includes('G')) {
  //     return parseInt(windString.slice(windString.indexOf('G')+1, windString.indexOf('G')+3), 10)
  //   } else {
  //     return 'none'
  //   }
  // }
  // const timeStamp = {
  //   day: parseInt(timeString.slice(0, 2), 10),
  //   hour: parseInt(timeString.slice(2, 4), 10),
  //   minute: parseInt(timeString.slice(4, 6), 10),
  // }
  // const windInfo = {
  //   direction: parseInt(windString.slice(0,3), 10),
  //   speed: windVelocity,
  //   gusts: gustVelocity(),
  // }
  // console.log({
  //   airport,
  //   timeStamp,
  //   windInfo,
  // }) 
}


