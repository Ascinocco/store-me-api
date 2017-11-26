'use strict'

const Database = use('Database');
const User = use('App/Models/User');

const AppResponse = use('App/Models/AppResponse');
const ErrorMessage = use('App/Models/Message/Error');
const SuccessMessage = use('App/Models/Message/Success');

class AuthController {

  async revokeRefresherToken (token) {
    return await Database
      .table('tokens')
      .where('id', `${token.id}`)
      .update('is_revoked', '1');
  }

  async revokeRefresherTokens (tokenData) {
    const { rows } = tokenData;

    rows.forEach((token) => {
      this.revokeRefresherToken(token);
    });
  }

  // @TODO: add timestamps for update and create
  async blacklistAndRevokeBearerToken (user, bearerToken) {
    const token = {
      'user_id': `${user.id}`,
      token: `${bearerToken.replace('Bearer ', '')}`,
      type: 'bearer',
      'is_revoked': '1',
    };

    return await Database
      .table('blacklist_tokens')
      .insert(token);
  }

  async signIn({ request, response, auth }) {
    const { email, password } = request.all();
    const user = await User.findBy({ email });

    if (user === null) {
      const message = new ErrorMessage({
        message: `We couldn't locate your account.`, 
      });

      return new AppResponse({ message }).send();
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

  async signOut({ request, response, auth }) {
    try {
      const user = await auth.getUser();
      const bearerToken = request.header('authorization');
      const refresherTokens = await auth.listTokens();

      await this.revokeRefresherTokens(refresherTokens);
      await this.blacklistAndRevokeBearerToken(user, bearerToken);

      // empty success message will return a status of success
      const message = new SuccessMessage({});
      return new AppResponse({ message, response }).send();

    } catch (error) {
      console.log(error);
      const message = new ErrorMessage({
        message: `An error occured logging you out. We're logginy out on all devices to be safe`,
      });

      return new AppResponse({ message, response }).send();
    }
  }
}

module.exports = AuthController
