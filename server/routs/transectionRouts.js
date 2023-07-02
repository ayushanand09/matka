const transectionBet = require("../controller/transectionController");
const router = require("express").Router();


router.post("/auth/transectionBet",transectionBet);


module.exports=router;