const fs = require('fs')
const axios = require('axios')

const token = process.env.EVENTBRITE_API_TOKEN

const getEvents = async () => {
  const config = {
    method: 'get',
    url: 'https://www.eventbriteapi.com/v3/organizations/6465941965/events/?status=live&page_size=100&order_by=start_asc',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axios(config).catch((error) => { console.log(error) })
}

const getLocation = async (venueId) => {
  const config = {
    method: 'get',
    url: `https://www.eventbriteapi.com/v3/venues/${venueId}`,
    headers: { Authorization: `Bearer ${token}` }
  }
  return await axios(config).catch((error) => { console.log(error) })
}

const getSoVersion = async () => {
  const config = {
    method: 'get',
    url: 'https://raw.githubusercontent.com/Security-Onion-Solutions/securityonion/master/VERSION'
  }
  return await axios(config).catch((error) => { console.log(error) })
}

const morgrifyEvents = async () => {
  const eventRes = await getEvents()
  const eventArr = []
  for (const event of eventRes.data.events) {
    if (event.name.text.toLowerCase().includes('conference')) { continue }
    if (event.status === 'started') { continue }

    let location = 'Unknown'
    if (event.online_event) {
      location = 'Virtual'
    } else if (event.venue_id !== null) {
      const locationRes = await getLocation(event.venue_id)
      if (locationRes.data.address.localized_area_display !== null) {
        location = locationRes.data.address.localized_area_display
      } else {
        location = locationRes.data.address.localized_address_display
      }
    }
    eventArr.push({
      name: event.name.text,
      summary: event.summary,
      start: event.start.local,
      end: event.end.local,
      location,
      register_link: event.url
    })
  }
  return eventArr
}

const writeJsonToFile = (filename, jsonData) => {
  fs.writeFileSync(`./content/${filename}`, JSON.stringify(jsonData, null, 2))
}

const writeSoVersion = async () => {
  const versionRes = await getSoVersion()
  const filename = 'version.json'

  const jsonData = { version: versionRes.data.replace('\n', '') }

  console.log(`Writing SO version to ${filename}...`)
  writeJsonToFile(filename, jsonData)
  console.log('Done\n')
}

const updateEvents = async () => {
  const jsonData = {
    events: []
  }
  const filename = 'training_schedule.json'
  jsonData.events = await morgrifyEvents()

  console.log(`Writing ${jsonData.events.length} events to ${filename}...`)
  writeJsonToFile(filename, jsonData)
  console.log('Done\n')
}

const main = () => {
  writeSoVersion().catch((error) => { console.log(error) })
  updateEvents().catch(error => console.log(error))
}

main()