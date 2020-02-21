const knex = require('knex')
const db = knex(require('../knexfile').development)

module.exports = {
    addResources,
    getResources
}

function addResources(resource) {
    return db('resource')
        .insert(resource, 'id')
}

function getResources() {
    return db('resource')
}