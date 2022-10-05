import { User } from "../models/index.js";

const create = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.json({
            msg: 'User created successfully',
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error creating a User',
            error
        })
    }
}

const getById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({
                msg: 'User not found'
            })
        }
        return res.json({
            msg: 'User found',
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error finding user by id',
            error
        })
    }
}

const deleteById = async (req, res) => {
    const { id } = req.params
    try {
        await User.findByIdAndRemove(id);
        return res.json({
            msg: 'User removed',
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error deleting user by id',
            error
        })
    }
}

export { create, getById, deleteById }