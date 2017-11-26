'use strict'

const User = use('App/Models/User');

const AppResponse = use('App/Models/AppResponse');

const ErrorMessage = use('App/Models/Message/Error');
const SuccessMessage = use('App/Models/Message/Success');

class AuthController {
  async signIn({ request, response, auth }) {
    const { email, password } = request.all();
    const user = await User.findBy({ email });

    if (user === null) {
      return new ErrorMessage({
        message: `We couldn't locate your account.`, 
      });
    }
    
    try {
      const authInfo = await auth.withRefreshToken().attempt(email, password);
      const responseData = {
        authInfo,
        user,
        response,
      };

      return new AppResponse(responseData).send();

    } catch (error) {
      const message = new ErrorMessage({
        message: `We couldn't log you in. Please try again`,
      });

      return new AppResponse({ message }).send();
    }
  }

  async signOut() {

  }
}

module.exports = AuthController
