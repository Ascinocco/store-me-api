'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')
const Hash = use('Hash')

const getFileType = () => (
  ((Math.random() * (10 - 0) + 0) >= 5) ? 'file' : 'folder'
);

// users
Factory.blueprint('App/Models/User', async (faker) => {
  return {
    firstName: faker.first(),
    middleName: faker.first(),
    lastName: faker.last(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

// files
Factory.blueprint('App/Models/File', async (faker) => {
  return {
    name: `${faker.hash({ length: 50 })}.txt`,
    type: getFileType(),
    extension: 'txt',
    favorite: faker.bool(),
    pinned: faker.bool(),
  }
})

