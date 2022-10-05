//create, getById, deleteById

import express from 'express'
import { userController } from '../controllers/index.js'
import { createUserValidator } from '../middlewares/index.js'

const router = express.Router()

router
.route('/user')
.post(createUserValidator, userController.create)

router
.route ('/user/:id')
.get(userController.getById)
.delete(userController.deleteById)

export default router
