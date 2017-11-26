'use strict'

const Model = use('Model')

class Message extends Model {
  constructor(messageData) {
    super(messageData);
    
    const { data = {}, message = null, prefix = null } = messageData;
    
    this.message = `${prefix}: ${message}`;
    this.data = data;
  }
}

module.exports = Message
