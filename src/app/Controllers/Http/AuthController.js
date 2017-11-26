'use strict'

const User = use('App/Models/User');
const ErrorMessage = use('App/Models/Message/Error');

class AuthController {
  async signIn({ request, auth }) {
    const { email, password } = request.all();
    const user = await User.findBy({ email: 'Slap@my.nuts.com' });

    if (user === null) {
      return new ErrorMessage({
        message: 'Oh No!'
      });
    }

    
    const tokenData = await auth.attempt(email, password);


    return {
      tokenData,
      user,
    }
  }

  async signOut() {

  }
}

module.exports = AuthController
