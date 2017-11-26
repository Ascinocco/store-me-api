'use strict'

const Message = use('App/Models/Message/Message');

const ERROR_MESSAGE = 'ERROR_MESSAGE';
const ERROR_PREFIX = 'Error';
const GENERIC_MESSAGE = 'Something went wrong.';

class ErrorMessage extends Message {
  constructor(error) {
    const {
      data = {},
      message = GENERIC_MESSAGE,
    } = error;
    
    const errorMessage = {
      data,
      message,
      prefix: ERROR_PREFIX,
    };

    super(errorMessage);
    this.type = ERROR_MESSAGE;
  }
}

module.exports = ErrorMessage
