'use strict'

const Model = use('Model')

const ErrorMessage = use('App/Models/Message/Error');

class AppResponse extends Model {
  constructor(responseData) {
    super();

    const {
      authInfo = {},
      user = {},
      message = {},
      data = {},
      response = null,
    } = responseData;

    this.authInfo = authInfo;
    this.user = user;
    this.message = message;
    this.data = data;
    this.response = response;
  }

  send () {
    if (this.response === null) {
      const message =
        `Response cannot be null. Check if your controller
        method arguments include the response object`;
      
      throw new Error(message);
    }

    const responseData = {
      authInfo: this.authInfo,
      user: this.user,
      message: this.message,
      data: this.data,
    };

    this.response.send(responseData);
  }
}

module.exports = AppResponse
