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
const examplePrefix = '/examples'
const filesPrefix = '/files';

Route.group(() => {

  // files routes
  Route.get(`${examplePrefix}`, 'FileController.index');
  Route.get(`${examplePrefix}/getFiles`, 'FileController.getFiles');
  Route.get(`${examplePrefix}/getViewers`, 'FileController.addViewers');

}).prefix(`${apiPrefix}/${apiVersion}`).formats(['json']);
