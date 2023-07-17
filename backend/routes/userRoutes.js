const { register } = require("../controller/usersController");
const { login } = require("../controller/usersController");
const { setAvatar } = require("../controller/usersController");

const router = require("express").Router();

router.post("/Register", register);
router.post("/login", login);
router.post("/setAvatar", setAvatar);

module.exports = router;