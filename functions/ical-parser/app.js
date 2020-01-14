const ical = require('node-ical')

const url = 'https://calendar.google.com/calendar/ical/pvr0grsuc7fl67jfrr4ge1f7c4%40group.calendar.google.com/private-076a16cf74a352c80f978d9ac23c6ceb/basic.ics'

exports.getICal =  (req, res) => {
  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  ical.fromURL(url, {}, function(err, data) {
    if (err) res.send(err)

    res.send(data)
  })
}
