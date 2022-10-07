import express from 'express'
import { productController } from '../controllers/index.js'

const router = express.Router()

router
.route('/product')
.post(productController.create)

router
.route('/product/:id')
.put(productController.updateById)
.delete(productController.deleteById)

router
.route('/product?filter')
.get(productController.getById)



export default router