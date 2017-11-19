'use strict'

const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.string('type', 80).notNullable() // file or folder
      table.string('extension', 20).notNullable()
      table.boolean('favorite').notNullable().default(false)
      table.boolean('pinned').notNullable().default(false)

      table.integer('ownerId').unsigned().notNullable()
      table.foreign('ownerId').references('users.id')

      table.integer('viewerId').unsigned()
      table.foreign('viewerId').references('users.id')

      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
