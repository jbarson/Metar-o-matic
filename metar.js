export default function metar(report) { 
  const reportItems = report.split(' ')
  if (reportItems.length != 3) {
    return 'Invalid record'
  }
  const airport = reportItems[0]
  const timeString = reportItems[1]
  const windString = reportItems[2]
  const windVelocityMultiplier = windString.endsWith('S') ? 1 : 2
  const windVelocity = windString.slice(3, /[a-z]/i.exec(windString).index) * windVelocityMultiplier
  const gustVelocity = () => {
    if (windString.includes('G')) {
      return `${windString.slice(windString.indexOf('G')+1, windString.indexOf('G')+3)}MPS`
    } else {
      return 'none'
    }
  }
  const timeStamp = {
    day: parseInt(timeString.slice(0, 2), 10),
    hour: timeString.slice(2, 4).padStart(2, '0'),
    minute: timeString.slice(4, 6).padStart(2, '0'),
  }
  const windInfo = {
    direction: windString.slice(0,3).padStart(3, '0'),
    speed: windVelocity,
    gusts: gustVelocity(),
  }
  return {airport,timeStamp,windInfo}
}


