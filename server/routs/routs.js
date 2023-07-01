const { register, login, update, deleteUser } = require("../controller/userController");

const router = require("express").Router();



router.post("/register",register)
router.post('/login', login)
router.post("/delete",deleteUser)
router.patch("/update",update)



module.exports=router;