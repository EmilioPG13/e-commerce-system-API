//Registrar productos, modificarlos o eliminarlos
//Create, update, delete

import mongoose from 'mongoose';
import { Product } from '../models/index.js'

const create = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.json({
        msg: 'Product created successfully',
        product,
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error creating product',
        error,
      });
    }
  };

  const getById = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({
          msg: 'Product not found',
        });
      }
      return res.json({
        msg: 'Product found',
        book,
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error getting product by id',
        error,
      });
    }
  };

const updateById = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.json({
        msg: `Product ${product.name} updated`,
        product,
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error updating product',
      });
    }
  };

const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndRemove(id);
      return res.json({
        msg: 'Product deleted',
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error deleting product',
        error,
      });
    }
  };

export { create, getById, updateById, deleteById }