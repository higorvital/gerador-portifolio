const {Router} = require('express');

const UserController = require('./app/controllers/UserController');


const routes = new Router();


routes.get('/user/:slug', UserController.index);

routes.post('/user', UserController.store);



module.exports = routes;