'use strict'

const Model = use('Model')

class File extends Model {
  /**
   * A relationship for the file to know who owns it
   */
  owner () {
    return this.belongsTo('App/Models/User')
  }

  /**
   * A relationship for the file to know who can view it
   */
  viewers () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = File
