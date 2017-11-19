'use strict'

const Model = use('Model')

class File extends Model {
  owner () {
    return this.belongsTo('App/Models/User')
  }

  viewers () {
    return this.hasMany('App/Models/User', 'viewerId', 'id')
  }
}

module.exports = File
