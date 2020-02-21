const knex = require('knex')
const db = knex(require('../knexfile').development)

module.exports = {
    addResources,
    getResources,
    addProjects,
    getProjects
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