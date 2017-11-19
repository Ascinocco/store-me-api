'use strict'

const Schema = use('Schema')

class FilesSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.string('type', 80).notNullable() // file or folder
      table.string('extension', 20).notNullable()
      table.integer('owner_id').unsigned().notNullable()
      table.boolean('favorite').notNullable().default(false)
      table.boolean('pinned').notNullable().default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FilesSchema
