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
        res.status(200).json(resource)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "No Resources Found"})
    })
})

server.post('/api/project', (req,res) => {
    const project = req.body
    Project.addProjects(project)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "Add project not working!"})
    })
})

server.get('/api/project', (req,res) => {

    Project.getProjects()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "No projects Found"})
    })
})

server.post('/api/task', (req,res) => {
    const task = req.body

    Project.addTask(task)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "Add Task not working!"})
    })
})

server.get('/api/task', (req,res) => {

    Project.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "No Tasks Found"})
    })
})

server.get('/api/project/:id',(req,res)=>{
    const id = req.params.id
    let resourceItems = []
    let taskItems = []

    Project.getTaskByProjectId(id)
    .then(items => {
        taskItems.push(...items)
    })
    .catch(err => {
        taskItems.push("no resources found")
    })

    Project.getResourceByProjectId(id)
    .then(items => {
        resourceItems.push(...items)
    })
    .catch(err => {
        resourceItems.push("no resources found")
    })

    Project.getProjectById(id)
    .then(project => {
        res.status(200).json({...project,tasks:taskItems, resources:resourceItems})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "Problem with get Projects by id"})
    })
})

const port = 5000;
server.listen(port, () => console.log('\n** Listening on Port 5000 **\n'))