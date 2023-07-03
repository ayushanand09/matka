const { register, login, update, deleteUser } = require("../controller/user");

const router = require("express").Router();



router.post("/auth/register",register)
router.post('/auth/login', login)
router.patch("/auth/update",update)
router.delete("/auth/delete",deleteUser)



module.exports=router;