const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://adarsh:<db_password>@cluster0.nmqm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')  

const connection = mongoose.connection
connectio.on('connected', () => { console.log('db connected') })
connection.on('error', () => { console.log('db error')})


