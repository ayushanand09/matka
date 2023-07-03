const { transectionWin, transectionBet,transectionCancel } = require("../controller/UserTransection");
const router = require("express").Router();


router.post("/auth/transectionBet",transectionBet);
router.post("/auth/transectionWin",transectionWin);
router.post("/auth/transectionCancel",transectionCancel);


module.exports=router;