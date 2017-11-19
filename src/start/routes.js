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

const filesPrefix = '/files';

// Api Route Group
Route.group(() => {

  // files routes
  Route.get(`${filesPrefix}`, 'FileController.index')

}).prefix('api/v1/').formats(['json'])
