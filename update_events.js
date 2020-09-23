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

const morgrifyEvents = async () => {
  const eventRes = await getEvents()
  const eventArr = []
  for (const event of eventRes.data.events) {
    if (event.online_event) {
      eventArr.push({
        name: event.name.text,
        start: event.start.local,
        end: event.end.local,
        location: 'Virtual',
        register_link: event.url
      })
    } else if (event.venue_id !== null) {
      const locationRes = await getLocation(event.venue_id)
      let location
      if (locationRes.data.address.localized_area_display !== null) {
        location = locationRes.data.address.localized_area_display
      } else {
        location = locationRes.data.address.localized_address_display
      }
      eventArr.push({
        name: event.name.text,
        start: event.start.local,
        end: event.end.local,
        location,
        register_link: event.url
      })
    } else {
      eventArr.push({
        name: event.name.text,
        start: event.start.local,
        end: event.end.local,
        location: 'Unknown',
        register_link: event.url
      })
    }
  }
  return eventArr
}

const main = async () => {
  const jsonData = {
    events: []
  }
  jsonData.events = await morgrifyEvents()
  console.log(`Writing ${jsonData.events.length} events to file...`)
  fs.writeFileSync('./content/training_schedule.json', JSON.stringify(jsonData, null, 2))
  console.log('Done\n')
}

main().catch(error => console.log(error))
