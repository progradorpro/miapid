const User = require("../models/user.model");

exports.getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

exports.createUser = async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

exports.deleteUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({
            mensaje: "Usuario eliminado"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};