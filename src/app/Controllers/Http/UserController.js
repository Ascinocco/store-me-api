'use strict'

const User = use('App/Models/User');
const { validate } = use('Validator');

class UserController {
  
  /**
   * Create new user
   * @argument request
   */
  async create ({ request, response }) {
    const body = request.post();

    const user = new User();

    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.middleName = body.middleName || null;
    user.email = body.email;
    user.password = body.password;

    await user.save();

    return user;
  }
}

module.exports = UserController
