const knex = require('knex')
const db = knex(require('../knexfile').development)

module.exports = {
    addResources,
    getResources,
    addProjects,
    getProjects,
    addTask,
    getTasks,
    getProjectById,
    getResourceByProjectId,
    getTaskByProjectId
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

function getProjectById(id){
    return db('project')
    .where({id})
}

function getTaskByProjectId(id){
    return db('task')
    .where({project_id:id})
}

function getResourceByProjectId(id){
    return db('resource')
    .select('resource.id as id','resource.name as name','resource.description as description')
    //.select('*')
    .join('project_resource','project_resource.resource_id','resource.id')
    .where({project_id:id})
}