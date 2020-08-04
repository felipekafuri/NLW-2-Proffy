import express from 'express';

import ClassController from './controllers/ClassesController'
import ConnectionsControllers from './controllers/ConnectionsControllers'

const routes = express.Router();
const classesController = new ClassController()
const connectionsController = new ConnectionsControllers()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)


routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes