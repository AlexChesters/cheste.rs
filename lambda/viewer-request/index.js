module.exports.handler = (event) => {
  console.log('event', event)

  return event.Records[0].cf.request
}
