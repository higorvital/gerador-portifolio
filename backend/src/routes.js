const {Router} = require('express');

const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.post('/user', UserController.store);

routes.get('/:slug', UserController.index);



module.exports = routes;