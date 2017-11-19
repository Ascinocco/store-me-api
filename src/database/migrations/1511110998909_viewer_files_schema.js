'use strict'

const Schema = use('Schema')

class ViewerFilesSchema extends Schema {
  up () {
    this.create('viewer_files', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('file_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('viewer_files')
  }
}

module.exports = ViewerFilesSchema
