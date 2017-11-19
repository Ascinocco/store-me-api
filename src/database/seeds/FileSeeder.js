'use strict'

/*
|--------------------------------------------------------------------------
| FileSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class FileSeeder {
  async run () {
    const files = await Factory
      .model('App/Models/File')
      .createMany(50)
  }
}

module.exports = FileSeeder
