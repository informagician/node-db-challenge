const knex = require('knex')
const db = knex(require('../knexfile').development)

module.exports = {
    addResources,
    getResources,
    addProjects,
    getProjects,
    addTask,
    getTasks
}

function addResources(resource) {
    return db('resource')
        .insert(resource, 'id')
}

function getResources() {
    return db('resource')
}

function addProjects(project) {
    return db('project')
        .insert(project, 'id')
}

function getProjects() {
    return db('project')
}

function addTask(task) {
    return db('task')
        .insert(task, 'id')
}

function getTasks(){
    return db ('task')
    .select('task.id as id','task.description as taskDescription','task.note as taskNote','task.isComplete as taskIsComplete','project.name as projectName','project.description as projectDescription')
    .join('project','task.project_id','project.id')
}