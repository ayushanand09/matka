const userAccount = require("../models/userAccount");
const accountTransectionModel = require("../models/UserTransection");

const transectionBet = async (req, res) => {
  try {
    let { userId, amount, transactionType } = req.body;

    const isUseraccount = await userAccount
      .findOne({ userId })
      .select({ __v: 0 });
    if (!isUseraccount)
      return res
        .status(400)
        .send({ status: false, message: "user account is not exist" });

    if (isUseraccount.totalAmount >= amount && transactionType == "bet") {
      isUseraccount.totalAmount = isUseraccount.totalAmount - amount;
    } else {
      return res.status(400).send({
        status: false,
        message: `you have only${account.totalAmount}`,
      });
    }
    isUseraccount.save();

    req.body.accountId = isUseraccount._id;
    const createdTransaction = await accountTransectionModel.create(req.body);

    return res.status(201).send({
      status: true,
      message: createdTransaction,
      newBalance: `${isUseraccount.totalAmount}`,
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports.transectionBet = transectionBet;




const transectionWin = async (req, res) => {
  try {
    let { userId, amount, transactionType } = req.body;

    const isUseraccount = await userAccount
    .findOne({ userId })
    .select({ __v: 0 });
  if (!isUseraccount)
    return res
      .status(400)
      .send({ status: false, message: "user account is not exist" });

    if (amount > 0 && transactionType == "win") {      
      isUseraccount.totalAmount = isUseraccount.totalAmount + amount;
      isUseraccount.save();
          }     
    else {
      return res.status(400).send({
        status: false,
        message: `you have enter worng information`,
      });
    }

    req.body.accountId = isUseraccount._id;
    const createdTransaction = await accountTransectionModel.create(req.body);

    return res.status(201).send({
      status: true,
      message: createdTransaction,
      newBalance: `${isUseraccount.totalAmount}`,
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports.transectionWin = transectionWin;


const transectionCancel = async(req,res)=>{
return "";
}

module.exports.transectionCancel = transectionCancel;