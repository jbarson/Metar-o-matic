import chalk from 'chalk'
import fs from 'fs'
import readline from 'readline'
import Table from "cli-table";
import metar from './metar'

const airportsList = []

const modifyAirportRecord = (info) => {
  const record = airportsList.find(item => item.airport === info.airport)
  if (!record) {
    airportsList.push({
      airport: info.airport,
      timeStamp: info.timeStamp,
      windVelocity: info.windInfo.speed,
      currentWindVelocity: info.windInfo.speed,
      entries: 1
    })
  } else {
    record.entries++
    record.windVelocity = Math.floor((record.windVelocity + info.windInfo.speed) / record.entries)
    // Note normally I would be using standard dates here, which make calculations much easier.  rather than do the math here, I will assume that all entries will come in time order.
    record.currentWindVelocity = info.windInfo.speed
  }
}
const outputAirportsTable = list => { 
  
  const table = new Table({
    head: ['Airport', 'Average Windspeed', 'CurrentWindspeed']
  })
  list.map(item => table.push([item.airport, item.windVelocity, item.currentWindVelocity]))
  console.log(table.toString());
}
  

  export default function processFile(fileLocation) {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(fileLocation)
    })
  
    lineReader.on('line', (line) => {
      if (line === '[') return
      if (line === ']') {
        outputAirportsTable(airportsList)
        return
      }
      const airportInfo = metar(line.replace(/"/g, '').replace(/,/, '').trim())
      modifyAirportRecord(airportInfo)
    })
    
  }