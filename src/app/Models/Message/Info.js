'use strict'

const Message = use('App/Models/Message/Message');

const INFO_MESSAGE = 'INFO_MESSAGE';
const INFO_PREFIX = 'Info';
const GENERIC_MESSAGE = 'Action Handled.';

class InfoMessage extends Message {
  constructor(info) {
    const {
      data = {},
      message = GENERIC_MESSAGE,
    } = info;

    const infoMessage = {
      data,
      message,
      prefix: INFO_PREFIX,
    };

    super(infoMessage);
    this.type = INFO_MESSAGE;
  }
}

module.exports = InfoMessage
