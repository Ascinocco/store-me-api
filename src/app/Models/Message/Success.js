'use strict'

const Message = use('App/Models/Message/Message');

const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
const SUCCESS_PREFIX = 'Success';
const GENERIC_MESSAGE = 'Action Completed.';

class SuccessMessage extends Message {
  constructor(success) {
    const {
      data = {},
      message = GENERIC_MESSAGE,
    } = success;

    const successMessage = {
      data,
      message,
      prefix: SUCCESS_PREFIX,
    };

    super(successMessage);
    this.type = SUCCESS_MESSAGE;
  }
}

module.exports = SuccessMessage
