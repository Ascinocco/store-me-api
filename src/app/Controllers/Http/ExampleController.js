'use strict'

const User = use('App/Models/User');
const File = use('App/Models/File');

class ExampleController {
  async index () {
    const user = new User();
    user.firstName = 'Paul';
    user.lastName = 'Wall';
    user.middleName = 'Steven';
    user.password = 'yourmother123!';
    user.email = 'paul.wall@mail.com';
    await user.save();

    const file = new File();
    file.name = 'hi.txt';
    file.type = 'file';
    file.extension = 'txt';
    file.ownerId = user.id;
    await file.save();

    await user.files().save(file);

    return {
      file,
      user,
    }
  }

  async getFiles () {
    const user = await User.find(1);
    const files = await user.files().fetch();

    return {
      files
    }
  }

  async addViewers () {
    
    // const user = new User();
    // user.firstName = 'Steve';
    // user.lastName = 'Stevenons';
    // user.middleName = 'Stehpah';
    // user.password = 'yourmother123!';
    // user.email = 's.s@mail.com';
    // await user.save();

    const file = await File.find(1);
    const viewers = await file.viewers().fetch();

    return {
      viewers
    }
  }
}

module.exports = ExampleController
