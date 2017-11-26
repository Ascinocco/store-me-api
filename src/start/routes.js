'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

// api versioning
const apiPrefix = 'api';
const apiVersion = 'v1';

// route prefix's
const userPrefix = '/user';
const filePrefix = '/files';
const examplePrefix = '/examples'

Route.group(() => {

  // sign in / out
  Route.post('/sign-in', 'AuthController.signIn');
  Route.post('/sign-out', 'AuthController.signOut').middleware('auth');

  // user routes
  Route
    .post(`${userPrefix}/new`, 'UserController.create')
    .validator('StoreUser');

  // example routes
  Route.get(`${examplePrefix}`, 'FileController.index');
  Route.get(`${examplePrefix}/getFiles`, 'FileController.getFiles');
  Route.get(`${examplePrefix}/getViewers`, 'FileController.addViewers');

}).prefix(`${apiPrefix}/${apiVersion}`).formats(['json']);
