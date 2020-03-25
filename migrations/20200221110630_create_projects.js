
exports.up = function(knex) {
  return knex.schema
  .createTable('project', tbl => {
      tbl.increments()
      tbl.string('name',128).notNullable()
      tbl.string('description')
      tbl.boolean('isComplete').notNullable().defaultTo(false)
  })
  .createTable('task', tbl => {
      tbl.increments()
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project').onUpdate('CASCADE').onDelete('RESTRICT')
      tbl.string('description').notNullable()
      tbl.string('note')
      tbl.boolean('isComplete').notNullable().defaultTo(false)
  })
  .createTable('resource', tbl => {
      tbl.increments()
      tbl.string('name',64).notNullable()
      tbl.string('description')
  })
  .createTable('project_resource', tbl => {
      tbl.primary(['project_id','resource_id'])
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project').onUpdate('CASCADE').onDelete('RESTRICT')
      tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resource').onUpdate('CASCADE').onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resource')
  .dropTableIfExists('resource')
  .dropTableIfExists('task')
  .dropTableIfExists('project')
};
