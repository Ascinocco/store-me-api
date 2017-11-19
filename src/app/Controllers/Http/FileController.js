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
    return userFiles;
  }
}

module.exports = FileController
