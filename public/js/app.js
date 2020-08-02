console.log('Client side script is loaded in')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ' '

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
    response.json().then((data)=>{
        if(data.error){
            messageTwo.textContent = data.error
        } else {          
            messageOne.textContent = data.location
            messageTwo.textContent = 'temperature: '+data.forecastData.temperature
            //   console.log(data.location)
            //   console.log(data.forecastData)
        }
    })
})


})