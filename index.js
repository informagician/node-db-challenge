const express = require('express')
const Project = require('./data/projects-model')
const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    res.status(200).json({message:"API is Working!"})
})

const port = 5000;
server.listen(port, () => console.log('\n** Listening on Port 5000 **\n'))