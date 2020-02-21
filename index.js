const express = require('express')
const Project = require('./data/projects-model')
const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    res.status(200).json({message:"API is Working!"})
})

server.post('/api/resource', (req,res) => {
    const resource = req.body
    Project.addResources(resource)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "Add Resource not working!"})
    })
})

server.get('/api/resource', (req,res) => {

    Project.getResources()
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "No Resources Found"})
    })
})

const port = 5000;
server.listen(port, () => console.log('\n** Listening on Port 5000 **\n'))