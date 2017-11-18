'use strict'

const Model = use('Model')

class File extends Model {
  owner () {
    return this.hasOne('App/Models/User')
  }

  viewers () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = File
