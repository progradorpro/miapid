const express = require("express");

const router = express.Router();

const {
    getUsers,
    createUser,
    deleteUser
} = require("../controllers/user.controller");

const auth = require("../middleware/auth.middleware");

router.get("/", getUsers);

router.post("/", auth, createUser);

router.delete("/:id", auth, deleteUser);

module.exports = router;