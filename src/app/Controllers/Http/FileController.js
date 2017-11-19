'use strict'

const User = use('App/Models/User')
const File = use('App/Models/File')

class FileController {
  async index ({ request }) {
    return await File.all()
  }

  async example () {
    const user = await User.find(7)
    const userFiles = await user.files().fetch()
    return userFiles
  }

  async files () {
    const files = await File.findBy('owner_id', 2)
    return files
  }

  async restrictedFiles () {
    const loggedInUserId = 2;
    const file = await File.find(4);
    return file;
  }

  async relationships () {

    const user = await User.find(3);
    const tokens = user.tokens;

    const file = await File.find(3);
    const owner = file.owner;

    const viewers = file.viewers;

    return {
      tokens,
      owner,
      viewers,
    }
  }

  async dogshit () {
    const user = new User();
  }
}

module.exports = FileController
