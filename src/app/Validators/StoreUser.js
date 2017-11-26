'use strict'

class StoreUser {
  get rules () {
    return {
      email: 'required|email|unique:users,email',
      firstName: 'required|alpha',
      lastName: 'required|alpha',
      middleName: 'alpha',
      password: 'required|min:6|max:30',
    }
  }

  get sanitizationRules () {
    return {
      email: 'normalize_email',
      firstName: 'capitalize',
      lastName: 'capitalize',
      middleName: 'capitalize',
    }
  }

  async fails (validationErrorMessages) {
    return this.ctx.response.send({
      validationErrorMessages,
    });
  }
}

module.exports = StoreUser
