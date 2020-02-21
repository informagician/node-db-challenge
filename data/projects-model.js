const knex = require('knex')
const db = knex(require('../knexfile').development)

module.exports = {
    addResources
}

function addResources(resource) {
    return db('resource')
        .insert(resource, 'id')
}