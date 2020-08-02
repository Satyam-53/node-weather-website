const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/current?lat='+latitude+'&lon='+longitude+'&key=abca0a1d7231459ebac229ad816f87df'

    request({url: url, json: true}, (error, {body}) =>{
        if(error){
            callback('unable to connect to location services', undefined)
        } else if(body.error){
            callback('invalid location provided, try again', undefined)
        } else{
            callback(undefined, {
                datetime: body.data[0].datetime,
                temperature: body.data[0].temp,
                weather_des: body.data[0].weather.description
            } )
        }
    })
}

module.exports = forecast